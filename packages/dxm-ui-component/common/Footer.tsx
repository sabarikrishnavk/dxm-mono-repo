import { BaseComponentProps } from '../model';


interface FooterProps extends BaseComponentProps {
    dynamicText: string;
}

export const FooterComponent = ({ children, tenant }: FooterProps) => {
    return (
        <div>
            <h1>Footer for {tenant}</h1>
            {children}
        </div>
    );
};
export default FooterComponent;