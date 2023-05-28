import { Button, Header, ProductCard, CartCard, Footer } from "dxm-ui-component";
import { saveInCache, getCache } from "dxm-util";
import { Metadata, ResolvingMetadata } from 'next';



// export const metadata: Metadata = { 'title': 'Home Page', 'description': 'Home Page desc' };

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
// const url = process.env
// const redisPort = 6379;

// // const client = createClient({ url: url });//
// const client = redis.createClient({ url: url.REDIS_URL });
// client.on('error', err => console.log('Redis Client Error', err));
// const setAsyncEx = util.promisify(client.setex).bind(client);
// const getAsync = util.promisify(client.get).bind(client);

// async function saveWithTtl(key: string, value: any, ttlSeconds = 60) {
//   return await setAsyncEx(key, ttlSeconds, JSON.stringify(value));
// }

// async function get(key: string) {
//   const jsonString = await getAsync(key);

//   if (jsonString) {
//     return JSON.parse(jsonString);
//   }
// }

export async function getData(id: string) {
  const key = "product-" + id;
  const response = await getCache(key);

  if (response) {
    return response;
  } else {
    let productjson = await fetch('http://localhost:8080/product/' + id + '.json').then(res => res.json());
    let product = productjson.product;
    await saveInCache(key, product, 5);
    return product;
  }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {

  const id = '2587160';
  const product = await getData(id);
  console.log('product : ' + product.name);
  // const pagejson = getEntryByUrl('ecom_marketing_page', '/liquorland/home', '', null);
  return {
    title: product.name
  };
}

export default function Page() {

  const theme = "site1";
  return (
    <>
      <Header theme={theme} />
      <Button />
      <ProductCard theme={theme} />
      <CartCard theme={theme} />

      <Footer theme={theme} />

    </>
  );
}
