import { useRouter } from 'next/router';
import React from 'react';
import { RoundedButton } from '../../../components/button/RoundedButton';
import { SpanText } from '../../../components/headings/SpanText';
import { COLORS } from '../../utils/colors';

export const AvailableSection = () => {
    const router = useRouter()
    return <div className='h-full'>
        <div className='h-full rounded-md bg-bottom bg-cover' style={{
            background: "linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.4)), url('https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
        }}>
            <div className='flex flex-col justify-center lg:text-4xl md:text-3xl sm:text-xl font-semibold items-center h-full text-center'>
                <h1 className=''>{"I'm "} <SpanText text='Available ' color={COLORS.primary} /> for freelancing</h1>
                <p className='lg:text-lg md:text-base sm:text-sm text-black font-medium'>Have a question or want to work together?</p>
                <RoundedButton onClick={() => router.push("/#contact")} className='lg:w-1/2 md:w-1/3 sm:w-1/4 mx-auto lg:text-lg md:text-base sm:text-sm mt-5' text='Hire Me!' />
            </div>
        </div>
    </div>;
};
