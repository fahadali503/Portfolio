import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const ContactInfo = () => {


    return <div className='h-full w-full mt-6'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>
            <div className='text-center'>
                <div className='w-1/4 mx-auto lg:py-11 md:py-7 lg:bg-[#1A1A1A] rounded-full'>
                    <FaEnvelope className='mx-auto lg:text-5xl sm:text-2xl xss:text-lg xs:text-xl text-yellow-400' />
                </div>
                <h1 className='font-medium text-xl sm:text-lg xs:text-sm xss:text-xs  mt-3 uppercase'>Email Address</h1>
                <h1 className='font-light text-lg mt-3'>fahada094@gmail.com</h1>
            </div>
            <div className='self-center'>
                <div className='flex justify-evenly'>
                    <div className='cursor-pointer duration-200 hover:bg-[#1DA1F2] hover:scale-110 bg-[#1A1A1A] lg:px-6 lg:py-6 md:px-4 md:py-4 rounded-full'>
                        <a href="https://twitter.com/fahadali_503">
                            <FaTwitter className='lg:text-3xl md:text-xl' />
                        </a>
                    </div>
                    <div className='cursor-pointer duration-200 hover:bg-[#4267B2] hover:scale-110 bg-[#1A1A1A] lg:px-6 lg:py-6 md:px-4 md:py-4 rounded-full'>
                        <a href="https://www.facebook.com/fahada094/">
                            <FaFacebookF className='lg:text-3xl md:text-xl' />
                        </a>
                    </div>
                    <div className='cursor-pointer duration-200 hover:bg-[#F5434B] hover:scale-110 bg-[#1A1A1A] lg:px-6 lg:py-6 md:px-4 md:py-4 rounded-full'>

                        <a href="https://www.instagram.com/fahad_ali503/">
                            <FaInstagram className='lg:text-3xl md:text-xl' />
                        </a>
                    </div>
                    <div className='cursor-pointer duration-200 hover:bg-[#0E72A3] hover:scale-110  bg-[#1A1A1A] lg:px-6 lg:py-6 md:px-4 md:py-4 rounded-full'>
                        <a href="www.linkedin.com/in/fahad-ali503">
                            <FaLinkedinIn className='lg:text-3xl md:text-xl' />

                        </a>
                    </div>
                    <div className='cursor-pointer duration-200 hover:bg-[#333333] hover:scale-110 bg-[#1A1A1A] lg:px-6 lg:py-6 md:px-4 md:py-4 rounded-full'>
                        <a href="https://github.com/fahadali503/">
                            <FaGithub className='lg:text-3xl md:text-xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
