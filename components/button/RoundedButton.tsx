import React from 'react';

interface IProps {
    text: string;
    className?: string;
    onClick?: () => void
}

export const RoundedButton = ({ text, className, onClick }: IProps) => {
    return <button onClick={onClick} className={`${className} border-white border w-full py-2 hover:border-yellow-300  rounded-full font-medium tracking-wider hover:animate-pulse`}>{text}</button>
};
