import React from 'react';

interface IProps {
    text: string;
    color?: string;
    className?: string;
    children?: React.ReactNode
}

export const Heading1 = ({ text, className, color, children }: IProps) => {
    return <h1 className={className} style={{ color }}>
        {text}
        {children}
    </h1>;
};
