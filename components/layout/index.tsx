import React from 'react';
import { SideNavbar } from '../nav';

export const Layout: React.FC = ({ children }) => {
    return <div className='bg-black font-Poppins text-white'>
        <SideNavbar />
        <section className='pt-20 w-full h-screen'>
            {children}
        </section>
    </div>;
};
