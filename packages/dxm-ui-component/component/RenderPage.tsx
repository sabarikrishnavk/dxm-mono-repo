import * as React from "react";
import { CMSPage, EComHeaderComponent, HeroBannerComponent } from 'dxm-cms';

interface Props {
  tenant?: String;
  cmsPage?: CMSPage;
}

export const RenderPage = ({ tenant, cmsPage }: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
        <span className="block">Rendering page</span>
      </h2>
      <EComHeaderComponent header={cmsPage?.header} />
      <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
          <a href="#" className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8"> Get started </a>
          <a href="/product/2587160" className="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"> Product -  2587160</a>
        </div>
      </div>
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
