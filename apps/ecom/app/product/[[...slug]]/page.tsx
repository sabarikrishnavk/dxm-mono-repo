
import { saveInCache, getCache } from "dxm-util";
import { Metadata, ResolvingMetadata } from 'next';
import { CMSPage, getCMSPage } from 'dxm-cms';

type Props = {
  params: { id: string, slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const env = process.env;

async function getData(id: string) {
  const key = "product-" + id;
  const response = await getCache(key);

  if (response) {
    return response;
  } else {
    let productjson = await fetch(env.NEXT_PUBLIC_HOSTED_URL + '/product/' + id + '.json').then(res => res.json());
    let product = productjson.product;
    await saveInCache(key, product, 5);
    return product;
  }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {

  const id = params.slug;//'2587160';
  const product = await getData(id);
  const resPage: CMSPage = await getCMSPage('/liquorland/home');
  console.log('product : ' + product.name + " :resPage : " + resPage.uid);
  // const pagejson = getEntryByUrl('ecom_marketing_page', '/liquorland/home', '', null);
  return {
    title: product.name
  };
}

export default function Page() {

  const tenant = "liquorland";
  return (
    <>
      Product page

    </>
  );
}
