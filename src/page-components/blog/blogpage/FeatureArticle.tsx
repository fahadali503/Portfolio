/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { COLORS } from '../../../utils/colors';

export const FeatureArticle = () => {
    return <div className={`border rounded-lg duration-200 transition ease-in-out hover:border-blue-600 hover:border-2 border-[${COLORS.lightBlack}] px-20 h-full pt-10`}>
        <h1 className='font-semibold'>Featured Article</h1>

        <div className='grid py-10 grid-cols-2 gap-4'>
            {/* Title */}
            <div className='h-full'>
                <div className='h-full flex flex-col justify-between'>
                    <div>
                        <div>
                            <h1 className='font-bold text-4xl'>useEffect vs useLayoutEffect</h1>
                        </div>
                        <div className='pt-10'>
                            <p className={`text-[${COLORS.lightBlue}] font-semibold`}>December 1st, 2020 — 3 min read</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-2xl italic flex items-center'>Read Full Article <span className='ml-10 border p-2 rounded-full'>
                            <FaArrowRight />
                        </span></p>
                    </div>
                </div>
            </div>
            {/* Image */}
            <div>
                <img src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_1100,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1474718723952-48d2a016108f" className='h-auto rounded-xl' alt="Something" />
            </div>
        </div>
    </div>;
};
