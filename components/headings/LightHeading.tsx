import React from 'react';
import { Heading1 } from './Heading1';


interface IProps {
    text: string;
    className?: string;
}

export const LightHeading = ({ text, className }: IProps) => {
    return <Heading1 text={text} className={`text-8xl font-bold opacity-20 ${className}`} />;
};
