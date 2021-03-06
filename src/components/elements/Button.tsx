import React, { ReactNode, FC } from 'react';

type Props = { children: ReactNode };

const Button: FC<Props> = ({ children }) => {
    return <button>{children}</button>;
};

export default Button;
