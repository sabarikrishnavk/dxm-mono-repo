import * as React from "react";
import { CMSPage, HeroBannerComponent } from 'dxm-cms';

interface Props {
  children?: React.ReactNode;
  tenant?: String;
  cmsPage?: CMSPage;
}

export const RenderPage = ({ children, tenant, cmsPage }: Props) => {
  return (
    <div>


      <h1>Product-Card for {tenant}</h1>
      {cmsPage?.page_components.map((component, key) => {
        if (component.herobanner) {
          return (
            <>
              <div>Hero banner component </div>
              <HeroBannerComponent herobanner={component.herobanner} key={`component-${key}`} />
            </>
          )
        }

      })}
    </div>
  );
};
