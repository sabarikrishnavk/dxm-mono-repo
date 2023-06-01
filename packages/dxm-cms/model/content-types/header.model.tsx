

import { getTenant } from 'dxm-util';
import { Img } from '../fields/image.model';
import { Menu } from '../fields/menu.model';
import { xLink } from '../fields/xlink.model';
import Image from 'next/image';

interface HeaderRow {
  logo: Img;
  search_box: any;
  header_ink: xLink[]
}
interface eComHeader {
  $: any;
  headerrow: HeaderRow;
  navigation_menu: Menu[]
}

interface eComHeaderProps {
  header?: eComHeader;
  componentdata?: any;
}

async function EComHeaderComponent(ecomHeaderProps: eComHeaderProps) {
  const header = ecomHeaderProps.header;
  const imageUrl = header?.headerrow ? header?.headerrow.logo.url : '';
  const imageAlt = getTenant();
  return (
    <>
      <p className="mt-4 text-lg leading-6 text-skin-muted">Header component : </p>
      <Image
        src={imageUrl}
        alt={imageAlt}
        className="dark:invert"
        width={100}
        height={24}
        priority />

    </>
  );
}

export { EComHeaderComponent };
export type { eComHeader };
