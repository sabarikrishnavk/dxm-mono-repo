import { Button, Header, ProductCard, CartCard, Footer } from "dxm-ui-component";
import { getEntryByUrl } from "dxm-cms";
import { Metadata, ResolvingMetadata } from 'next';

// export const metadata: Metadata = { 'title': 'Home Page', 'description': 'Home Page desc' };


type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};


export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;
  const productjson = await fetch('http://localhost:8080/product/2587160.json')
    .then(res => res.json());

  const pagejson = getEntryByUrl('ecom_marketing_page', '/liquorland/home', '', null);
  return {
    title: productjson.product.name
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
