import { Button, Header, ProductCard, CartCard, Footer } from "dxm-ui-component";
import { saveInCache, getCache } from "dxm-util";
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string, slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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

  const id = params.slug;//'2587160';
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
      Product page
      <ProductCard theme={theme} />
      <CartCard theme={theme} />

      <Footer theme={theme} />

    </>
  );
}
