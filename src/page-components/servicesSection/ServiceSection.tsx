import React from 'react';
import { FcAssistant, FcBusinessman, FcGlobe, FcHeatMap, FcSearch } from 'react-icons/fc';
import { Heading1 } from '../../../components/headings/Heading1';
import { LightHeading } from '../../../components/headings/LightHeading';
import { ServiceCard } from './ServiceCard';
import { FaBrush } from "react-icons/fa";
export const ServiceSection = () => {
    return <div className='w-full'>
        <div className='relative text-center'>
            <LightHeading text='Services' className='tracking-wider sm:text-7xl xs:text-6xl xss:text-5xl' />
            <Heading1 text='Services' className='absolute text-center w-full top-0 font-bold text-5xl xs:text-4xl xss:text-3xl' />
        </div>
        {/* Services Grid */}
        <div className='mt-10 w-full '>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 w-full gap-4'>
                {/* Web Design */}
                <ServiceCard
                    icon={<FaBrush className="text-center group-hover:text-black lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xss:text-2xl  leading-tight font-medium mb-7" />}
                    text='Web Design'

                />

                {/* Lead Gen */}
                <ServiceCard
                    icon={<FcSearch className="text-center group-hover:text-blacklg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xss:text-2xl  leading-tight font-medium mb-7" />}
                    text='Lead Generation'


                />
                {/* Accountant */}
                <ServiceCard
                    icon={<FcBusinessman className="text-center group-hover:text-black lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xss:text-2xl  leading-tight font-medium mb-7" />}
                    text='Accounting'


                />
                {/* Web Development */}
                <ServiceCard
                    icon={<FcGlobe className="text-center group-hover:text-black lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xss:text-2xl  leading-tight font-medium mb-7" />}
                    text='Full Stack Web Development'


                />

                {/* Auto Cad */}
                <ServiceCard
                    icon={<FcHeatMap className="text-center group-hover:text-black lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xss:text-2xl  leading-tight font-medium mb-7" />}
                    text='Architecture Autocad'


                />
            </div>
        </div>
    </div>;
};
