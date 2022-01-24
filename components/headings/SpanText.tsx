import React from 'react';

interface IProps {
    text: string;
    className?: string;
    color?: string
}

export const SpanText = ({ text, className, color }: IProps) => {
    return <span style={{ color }} className={className}>{text}</span>;
};
