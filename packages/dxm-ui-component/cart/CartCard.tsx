import * as React from "react";

interface Props {
  children?: React.ReactNode;
  theme?: String;
}

export const CartCard = ({ children , theme }: Props) => {
  return (
    <div>

      <h1>Cart-Card for {theme}</h1>
      {children}
    </div>
  );
};
