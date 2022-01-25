import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const ContactInfo = () => {


    return <div className='h-full mt-6'>
        <div className='grid grid-cols-2'>
            <div className='text-center'>
                <div className='w-1/4 mx-auto py-11 bg-[#1A1A1A] rounded-full'>
                    <FaEnvelope className='mx-auto text-5xl text-yellow-400' />
                </div>
                <h1 className='font-medium text-xl mt-3 uppercase'>Email Address</h1>
                <h1 className='font-light text-lg mt-3'>fahada094@gmail.com</h1>
            </div>
            <div className='self-center'>
                <div className='flex justify-evenly'>
                    <div className='cursor-pointer duration-200 hover:bg-[#1DA1F2] hover:scale-110 bg-[#1A1A1A] px-6 py-6 rounded-full'>
                        <a href="https://twitter.com/fahadali_503">
                            <FaTwitter className='text-3xl' />
                        </a>
                    </div>
                    <div className='cursor-pointer duration-200 hover:bg-[#4267B2] hover:scale-110 bg-[#1A1A1A] px-6 py-6 rounded-full'>
                        <a href="https://www.facebook.com/fahada094/">
                            <FaFacebookF className='text-3xl' />
                        </a>
                    </div>
                    <div className='cursor-pointer duration-200 hover:bg-[#F5434B] hover:scale-110 bg-[#1A1A1A] px-6 py-6 rounded-full'>

                        <a href="https://www.instagram.com/fahad_ali503/">
                            <FaInstagram className='text-3xl' />
                        </a>
                    </div>
                    <div className='cursor-pointer duration-200 hover:bg-[#0E72A3] hover:scale-110  bg-[#1A1A1A] px-6 py-6 rounded-full'>
                        <a href="www.linkedin.com/in/fahad-ali503">
                            <FaLinkedinIn className='text-3xl' />

                        </a>
                    </div>
                    <div className='cursor-pointer duration-200 hover:bg-[#333333] hover:scale-110 bg-[#1A1A1A] px-6 py-6 rounded-full'>
                        <a href="https://github.com/fahadali503/">
                            <FaGithub className='text-3xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
