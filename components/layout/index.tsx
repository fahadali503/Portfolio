import React, { useEffect } from 'react';
import { SideNavbar } from '../nav';


export const Layout: React.FC = ({ children }) => {

    return <div className='bg-black w-screen font-Poppins text-white'>
        <SideNavbar />
        <section className='mt-20 px-20'>
            {children}
        </section>
    </div>;
};
