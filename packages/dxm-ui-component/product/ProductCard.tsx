import * as React from "react";

interface Props {
  children?: React.ReactNode;
  tenant?: String;
}

export const ProductCard = ({ children , tenant }: Props) => {
  return (
    <div>

      <h1>Product-Card for {tenant}</h1>
      {children}
    </div>
  );
};
