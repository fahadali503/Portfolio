/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import { Slide } from './Slide';
import Slider from "react-slick";
import { SpanText } from '../../../components/headings/SpanText';
import { COLORS } from '../../utils/colors';
import { useRouter } from 'next/router';
export const HomePageCarousel = () => {
    const router = useRouter();
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return <div className='lg:px-32  w-full xs:ml-32 xss:ml-32 sm:ml-0 '>
        <Slider {...settings} arrows={false} autoplay autoplaySpeed={3000}>
            <Slide h1='Hello!' h2="I'm a " h2Span='Web Developer, ' imageSrc='/img1.jpg' isGrayFilter
                buttonHandleClick={() => router.push("/#contact")}
            >
                <SpanText className='lg:text-5xl md:text-3xl sm:text-2xl xs:text-xl' text='Based in ' color={COLORS.white} />
                <SpanText className='lg:text-5xl md:text-3xl sm:text-2xl xs:text-xl' text='Bahawalpur ' color={COLORS.primary} />
            </Slide>
            <Slide buttonHandleClick={() => router.push("/#contact")} h1='Hello!' h2="I'm " h2Span='Fahad Ali' h3='A Freelance Web Developer' imageSrc='/img2.jpg' />
        </Slider>
    </div>;
};
