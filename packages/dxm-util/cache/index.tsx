import redis from 'redis';
import util from "util";

const env = process.env;

const endpoint = env.REDIS_ENDPOINT_URL || "127.0.0.1:6379";
const password = env.REDIS_PASSWORD || null;
// const client = redis.createClient({ url: env.REDIS_URL });
const [host, port] = endpoint.split(":");

// const client = redis.createClient(+port, host);
const client = redis.createClient(+port, host, password === null ? undefined : {
  password
});
const setAsyncEx = util.promisify(client.setex).bind(client);
const getAsync = util.promisify(client.get).bind(client);

export async function saveInCache(key: string, value: any, ttlSeconds = 60) {
  return await setAsyncEx(key, ttlSeconds, JSON.stringify(value));
}

export async function getCache(key: string) {
  const jsonString = await getAsync(key);

  if (jsonString) {
    return JSON.parse(jsonString);
  }
}