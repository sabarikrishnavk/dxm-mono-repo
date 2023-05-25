import { Button, Header, ProductCard, CartCard, Footer } from "dxm-ui-component";
// import { getEntryByUrl } from "dxm-cms";
import { Metadata } from 'next';


export const metadata: Metadata = { 'title': 'Home Page', 'description': 'Home Page desc' };
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
