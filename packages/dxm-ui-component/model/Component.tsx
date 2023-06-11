import { EComHeader, EComHeaderComponent } from "./content-types/header.model";
import { HeroBanner, HeroBannerComponent } from "./fields/herobanner.model";

const ComponentTypes = {
    "ecom_header": { 'type': EComHeaderComponent, 'structure': EComHeader },
    "hero_banner": { 'type': HeroBannerComponent, 'structure': HeroBanner }
}

class BaseComponentProps {
    name?: string;
    structure?: any; //content structure
    data?: any;//content data
    children?: React.ReactNode;
    tenant?: String;
}

export { ComponentTypes, BaseComponentProps };