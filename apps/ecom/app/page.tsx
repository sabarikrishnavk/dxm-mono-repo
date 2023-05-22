import { Button, Header, ProductCard, CartCard } from "dxm-ui-component";
import { Metadata } from 'next';


export const metadata: Metadata = { 'title': 'Home Page', 'description': 'Home Page desc' };
export default function Page() {
  return (
    <>
      <Header theme="ecom" />

      <body>
        <Button />
        <ProductCard theme="site1" />
        <CartCard theme="site1" />
      </body>
    </>
  );
}
