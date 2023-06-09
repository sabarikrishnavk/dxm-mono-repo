import * as React from "react";

interface Props {
  children?: React.ReactNode;
  tenant?: String;
  sku?: String;
}

export const ProductCard = ({ children, tenant, sku }: Props) => {
  return (
    <div>

      <h1>Product-Card for {sku}  for tenant {tenant} </h1>
      {children}
    </div>
  );
};
