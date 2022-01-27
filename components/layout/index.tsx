import React, { useEffect } from 'react';
import { SideNavbar } from '../nav';


export const Layout: React.FC = ({ children }) => {

    return <div className='bg-black font-Poppins text-white'>
        <SideNavbar />
        <section className='mt-20 px-32 md:px-28 xs:px-20 xss:px-10'>
            {children}
        </section>
    </div>;
};
