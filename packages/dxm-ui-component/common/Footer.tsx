import * as React from "react";
import { FooterProps } from "../model/HtmlElement";

export const Footer = ({ children, theme }: FooterProps) => {
  return (
    <div>
      <h1>Footer for {theme}</h1>
      {children}
    </div>
  );
};
