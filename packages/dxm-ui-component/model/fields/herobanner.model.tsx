import { BaseComponentProps } from '../Component';
import { Img } from './image.model';
import { Link } from './link.model';
import Image from 'next/image';

class HeroBanner {
  $: any;
  image?: Img;
  description?: string;
  link?: Link;
  overlaytext?: string;
  textclassname?: string;
  imageclassname?: string;
}

interface HeroBannerProps extends BaseComponentProps {
  // structure: HeroBanner, //content structure
  // data: any//content data
}

function HeroBannerComponent(herobannerProps: HeroBannerProps) {
  const herobanner = herobannerProps.structure;
  const imageUrl = herobanner?.image ? herobanner.image.url : '';
  const imageAlt = herobanner?.overlaytext ? herobanner.overlaytext : '';
  return (
    <>
      <p className="mt-4 text-lg leading-6 text-skin-muted"> Hero banner component </p>
      <div
        className="hero-banner"
        style={{
          background: herobanner?.textclassname ? herobanner.textclassname : '',
        }}>
        {herobanner?.overlaytext ? herobanner.overlaytext : ''}
        <br />
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="dark:invert"
          width={100}
          height={24}
          priority />

      </div>
    </>
  );
}

export { HeroBannerComponent, HeroBanner }; 
