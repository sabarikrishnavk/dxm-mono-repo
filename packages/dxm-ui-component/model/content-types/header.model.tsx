


import { Img } from '../fields/image.model';
import { Menu } from '../fields/menu.model';
import { xLink } from '../fields/xlink.model';
import Image from 'next/image';

interface HeaderRow {
  logo: Img;
  search_box: any;
  header_ink: xLink[]
}
class EComHeader {
  $: any;
  headerrow?: HeaderRow;
  navigation_menu?: Menu[]
}

interface eComHeaderProps {
  header?: EComHeader;
  componentdata?: any;
}

function EComHeaderComponent(ecomHeaderProps: eComHeaderProps) {
  const header = ecomHeaderProps.header;
  const imageUrl = header?.headerrow ? header?.headerrow.logo.url : '';
  // const imageAlt = getTenant();
  const imageAlt = '';
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

 const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

export { EComHeader, EComHeaderComponent }; 