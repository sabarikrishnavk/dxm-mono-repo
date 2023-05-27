import * as React from "react";

interface Props {
    children?: React.ReactNode;
    theme?: String;
}

export const getPageMetadata ({ children, theme }: Props) => {
    return (
        <div>

            <h1>Product-Card for {theme}</h1>
            {children}
        </div>
    );
};
