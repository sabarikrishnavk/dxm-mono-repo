import { HeroBanner } from '../fields/herobanner.model';
import { SEO } from '../fields/seo.model';
import { EComHeader } from './header.model';
interface ecom_header {
  uid: string;
  _content_type_uid: string;
}
interface CMSPage {
  $: any;
  title: string;
  url: string;
  seo: SEO;
  uid: string;
  locale: string;
  ecom_header: ecom_header[];
  header: EComHeader;
  page_components: [
    {
      herobanner: HeroBanner;
    }
  ];
}
export type { CMSPage, ecom_header }
