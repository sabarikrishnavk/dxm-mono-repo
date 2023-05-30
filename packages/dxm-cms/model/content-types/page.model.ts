import { HeroBanner } from '../fields/herobanner.model';
import { SEO } from '../fields/seo.model';

export interface CMSPage {
  $: any;
  title: string;
  url: string;
  seo: SEO;
  uid: string;
  locale: string;
  page_components: [
    {
      herobanner: HeroBanner;
    }
  ];
}
