import React from 'react';
import { Heading1 } from '../../../components/headings/Heading1';
import { LightHeading } from '../../../components/headings/LightHeading';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';


export const ContactSection = () => {

    return <div>
        <div className='lg:relative md:block text-center'>
            <LightHeading text='Contact' className='tracking-wider lg:text-7xl md:text-center xs:text-4xl xss:text-2xl' />
            <Heading1 text='Contact Me' className='lg:absolute md:static md:text-center w-full top-0 font-bold lg:text-5xl xs:text-2xl xss:text-sm' />
        </div>
        <div className='text-center font-semibold lg:text-xl xs:text-sm xss:text-sm xs:mt-10 mt-6'>
            Have a question or want to work together?
        </div>
        <div>
            <ContactInfo />
        </div>
        <div className='mt-20'>
            <ContactForm />
        </div>
    </div>;
};
