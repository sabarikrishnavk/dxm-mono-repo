import { Img } from './image.model';
import { Link } from './link.model';

interface HeroBanner {
  $: any;
  banner_title: string;
  bg_color: string;
  banner_image: Img;
  text_color: string;
  call_to_action: Link;
  banner_description: string;
}

interface HeroBannerProps {
  herobanner: HeroBanner
}

function HeroBannerComponent(herobannerProps: HeroBannerProps) {
  const herobanner = herobannerProps.herobanner;
  return (
    <div
      className="hero-banner"
      style={{
        background: herobanner?.bg_color ? herobanner.bg_color : '',
      }}>
    </div>
  );
}

export { HeroBannerComponent };
export type { HeroBanner };

