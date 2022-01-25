import React from 'react';
import { Heading1 } from '../../../components/headings/Heading1';
import { LightHeading } from '../../../components/headings/LightHeading';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const ContactSection = () => {
    return <div>
        <div className='relative text-center'>
            <LightHeading text='Contact' className='tracking-wider' />
            <Heading1 text='Contact Me' className='absolute text-center w-full top-0 font-bold text-5xl' />
        </div>
        <div className='text-center font-semibold text-xl mt-6'>
            Have a question or want to work together?
        </div>
        <div>
            <ContactInfo />
        </div>
        <div>
            <ContactForm />
        </div>
    </div>;
};
