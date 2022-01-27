import React from 'react';
import { Heading1 } from '../components/headings/Heading1';
import { LightHeading } from '../components/headings/LightHeading';
import { BlogLayout } from '../components/layout/BlogLayout';
const BlogPage = () => {
    return <BlogLayout title='Blogs - Fahad Ali'>
        <div className='relative text-center'>
            <LightHeading text='COMING SOON' className='tracking-wider' />
            <Heading1 text='MY BLOG' className='absolute text-center w-full top-0 font-bold text-5xl' />
        </div>
    </BlogLayout>;
};

export default BlogPage;
