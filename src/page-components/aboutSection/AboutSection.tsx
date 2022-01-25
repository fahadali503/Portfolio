/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Heading1 } from '../../../components/headings/Heading1';
import { LightHeading } from '../../../components/headings/LightHeading';
import { InfoTable } from './InfoTable';

export const AboutSection = () => {
    return <div className='pt-10'>
        <div className='grid justify-items-center lg:grid-cols-2  md:grid-cols-1'>
            <div className='lg:block md:hidden sm:hidden '>
                <img src="/img1.jpg" className='grayscale lg:block md:hidden sm:hidden ' alt="" />
            </div>
            <div className='lg:justify-self-start md:justify-self-center sm:justify-self-center'>
                {/* Heading */}
                <div className='relative'>
                    <LightHeading text='About' className='tracking-wider' />
                    <Heading1 text='About Me' className='absolute top-0 font-bold text-5xl' />
                </div>

                {/* Information */}
                <div className='pt-[100px] md:text-center  justify-self-center'>
                    <table className="min-w-full">
                        <tbody className=' bg-black'>
                            <InfoTable text1='Name:' text2='Fahad Ali' />
                            <InfoTable text1='Date of birth:' text2='May 14, 2000' />
                            <InfoTable text1='Address:' text2='Bahawalpur Punjab, Pakistan' />
                            <InfoTable text1='Zip code:' text2='63100' />
                            <InfoTable text1='Email:' text2='fahada094@gmail.com' />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>;
};
