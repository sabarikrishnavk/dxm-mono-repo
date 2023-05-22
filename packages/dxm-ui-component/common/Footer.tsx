import * as React from "react";

interface Props {
  children?: React.ReactNode;
  theme?: String;
}

export const Footer = ({ children , theme}: Props ) => {
  return (
    <div>
      <h1>Footer for {theme}</h1>
      {children}
    </div>
  );
};
