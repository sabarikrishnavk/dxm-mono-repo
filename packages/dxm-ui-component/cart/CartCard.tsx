import * as React from "react";

interface Props {
  children?: React.ReactNode;
  tenant?: String;
}

export const CartCard = ({ children, tenant }: Props) => {
  return (
    <div>

      <h1>Cart-Card for {tenant}</h1>
      {children}
    </div>
  );
};
