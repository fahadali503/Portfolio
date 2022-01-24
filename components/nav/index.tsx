import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';

export const SideNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <div>
        <Transition
            show={isOpen}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div style={{ backgroundColor: "#353131" }} className='h-full  w-full z-20 fixed'>

                <div className='lg:text-7xl md:text-5xl sm:text-4xl  text-right cursor-pointer mr-4' onClick={() => setIsOpen(false)}>&times;</div>
                <div className='h-full flex flex-col justify-center items-center'>
                    <div className='m-4 hover:text-yellow-500 lg:text-6xl md:text-4xl sm:text-4xl font-bold'>
                        <Link href={'/'}><a>Home</a></Link>
                    </div>
                    <div className='my-4 lg:text-6xl md:text-4xl sm:text-4xl hover:text-yellow-500 font-bold'>About</div>
                    <div className='my-4 lg:text-6xl md:text-4xl sm:text-4xl hover:text-yellow-500 font-bold'>Services</div>
                    <div className='my-4 lg:text-6xl md:text-4xl sm:text-4xl hover:text-yellow-500 font-bold'>Clients</div>
                    <div className='my-4 lg:text-6xl md:text-4xl sm:text-4xl hover:text-yellow-500 font-bold'>Contact</div>
                </div>
            </div>
        </Transition>

        {!isOpen && <span onClick={() => setIsOpen(true)} className='top-5 md:text-5xl lg:text-6xl animate-pulse cursor-pointer fixed right-4'  >&#9776;</span>}
    </div>
};
