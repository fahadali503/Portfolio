/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { RoundedButton } from '../../../components/button/RoundedButton';
import { Heading1 } from '../../../components/headings/Heading1';
import { SpanText } from '../../../components/headings/SpanText';

interface IProps {
    h1: string;
    h2: string;
    h2Span: string;
    h3?: string;
    buttonText?: string;
    buttonHandleClick?: () => void;
    imageSrc: "/img1.jpg" | "/img2.jpg";
    isGrayFilter?: boolean;
    children?: React.ReactNode;
}

export const Slide = ({ isGrayFilter = false, buttonText = "Hire Me", h1, h2, h2Span, h3, imageSrc, buttonHandleClick, children }: IProps) => {
    return <div className='grid items-center  lg:grid-cols-2 md:grid-cols-1'>
        <div className='lg:row-start-1 md:row-start-2 sm:row-start-2 lg:text-left  md:text-center  sm:text-center md:mt-5'>
            <div>
                <Heading1 text={h1} className='uppercase font-bold' color='#ffbd39' />
            </div>
            <div className='my-6 font-extrabold lg:text-8xl md:text-4xl sm:text-3xl'>
                <Heading1 text={h2}>
                    <SpanText color='#ffbd39' text={h2Span} className='' /> {children}
                </Heading1>
            </div>
            <div>
                <Heading1 className='font-bold lg:text-3xl md:text-xl sm:text-xl' text={h3!} />
            </div>
            <div className='mt-5 lg:mx-0 md:mx-auto sm:mx-auto w-1/2'>
                <RoundedButton text={buttonText} onClick={buttonHandleClick} />
            </div>
        </div>
        <div className='h-full  md:justify-self-center'>
            <img src={imageSrc} className={`${isGrayFilter ? "grayscale" : ""}`} alt="Fahad Ali" />
        </div>
    </div>;
};
