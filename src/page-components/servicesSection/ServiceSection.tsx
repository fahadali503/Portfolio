import React from 'react';
import { FcAssistant, FcBusinessman, FcGlobe, FcHeatMap, FcSearch } from 'react-icons/fc';
import { Heading1 } from '../../../components/headings/Heading1';
import { LightHeading } from '../../../components/headings/LightHeading';
import { ServiceCard } from './ServiceCard';
import { FaBrush } from "react-icons/fa";
export const ServiceSection = () => {
    return <div>
        <div className='relative text-center'>
            <LightHeading text='Services' className='tracking-wider' />
            <Heading1 text='Services' className='absolute text-center w-full top-0 font-bold text-5xl' />
        </div>
        {/* Services Grid */}
        <div className='mt-10'>
            <div className='grid grid-cols-2 gap-28'>
                {/* Web Design */}
                <ServiceCard
                    icon={<FaBrush className="text-center group-hover:text-black text-6xl  leading-tight font-medium mb-7" />}
                    text='Web Design'
                />

                {/* Lead Gen */}
                <ServiceCard
                    icon={<FcSearch className="text-center group-hover:text-black text-6xl  leading-tight font-medium mb-7" />}
                    text='Lead Generation'
                />
                {/* Accountant */}
                <ServiceCard
                    icon={<FcBusinessman className="text-center group-hover:text-black text-6xl  leading-tight font-medium mb-7" />}
                    text='Accounting'
                />
                {/* Web Development */}
                <ServiceCard
                    icon={<FcGlobe className="text-center group-hover:text-black text-6xl  leading-tight font-medium mb-7" />}
                    text='Full Stack Web Development'
                />

                {/* Auto Cad */}
                <ServiceCard
                    icon={<FcHeatMap className="text-center group-hover:text-black text-6xl  leading-tight font-medium mb-7" />}
                    text='Architecture Autocad'
                    className='col-span-2'
                />
            </div>
        </div>
    </div>;
};
