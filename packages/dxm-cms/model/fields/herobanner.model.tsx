import { Img } from './image.model';
import { Link } from './link.model';

interface HeroBanner {
  $: any;
  image: Img;
  description: string;
  link: Link;
  overlaytext: string;
  textclassname: string;
  imageclassname: string;
}

interface HeroBannerProps {
  cmsdata: HeroBanner,
  componentdata: any
}

function HeroBannerComponent(herobannerProps: HeroBannerProps) {
  const herobanner = herobannerProps.cmsdata;
  return (
    <>
      <div>Hero banner component </div>
      <div
        className="hero-banner"
        style={{
          background: herobanner?.textclassname ? herobanner.textclassname : '',
        }}>
        {herobanner?.overlaytext ? herobanner.overlaytext : ''}
      </div>
    </>
  );
}

export { HeroBannerComponent };
export type { HeroBanner };
