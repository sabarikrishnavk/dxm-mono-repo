import redis from 'redis';
import util from "util";

const env = process.env;
const redisPort = 6379;

// const client = createClient({ url: url });//
const client = redis.createClient({ url: env.REDIS_URL });
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