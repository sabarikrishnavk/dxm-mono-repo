
interface FooterProps {
  children?: React.ReactNode;
  tenant?: String;
}

export const Footer = ({ children, tenant }: FooterProps) => {
  return (
    <div>
      <h1>Footer for {tenant}</h1>
      {children}
    </div>
  );
};
