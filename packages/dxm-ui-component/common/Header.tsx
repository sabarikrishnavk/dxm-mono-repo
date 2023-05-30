
 
interface HeaderProps {
  children?: React.ReactNode;
  tenant?: String;
}

export const Header = ({ tenant }: HeaderProps) => {
  return (
    <>
      <div> Sample  {tenant}</div>
    </>
  );
};

