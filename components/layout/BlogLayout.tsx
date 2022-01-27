import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

export const BlogLayout: React.FC<{ title: string }> = ({ children, title }) => {
    return <div className='w-10/12 mx-auto font-Poppins text-white'>
        <Head>
            <title>{title}</title>
        </Head>
        <nav className='py-5'>
            <Link href={'/'} passHref>
                <a><FaHome className='text-5xl cursor-pointer hover:text-yellow-300' /></a>
            </Link>
        </nav>
        <section>
            {children}
        </section>
    </div>;
};
