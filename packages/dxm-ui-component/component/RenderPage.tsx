import * as React from "react";
import { CMSPage, HeroBannerComponent } from 'dxm-cms';

interface Props {
  tenant?: String;
  cmsPage?: CMSPage;
}

export const RenderPage = ({ tenant, cmsPage }: Props) => {
  return (
    <div>
      <h1>Rendering Page for {tenant}</h1>
      {cmsPage?.page_components.map((component, key) => {
        if (component.herobanner) {
          return (
            <HeroBannerComponent cmsdata={component.herobanner} key={`component-${key}`} componentdata={''} />
          )
        }

      })}
    </div>
  );
};
