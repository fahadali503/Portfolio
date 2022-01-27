import React from 'react';
import { Heading1 } from '../../../../components/headings/Heading1';
import { LightHeading } from '../../../../components/headings/LightHeading';
import { IBlog } from '../../../utils/types';
import { Articles } from './Articles';
import { BlogBy } from './BlogBy';
import { FeatureArticle } from './FeatureArticle';


interface IProps {
    blogs: IBlog[]
}

export const BlogMain = ({ blogs }: IProps) => {
    return <div>
        <div className='relative text-center'>
            <LightHeading text='BLOG' className='tracking-wider' />
            <Heading1 text='Our Blog' className='absolute uppercase text-center w-full top-0 font-bold text-5xl' />
        </div>
        {/* Sub Heading */}
        <div>
            <h1 className='text-center capitalize font-semibold text-xl tracking-wider '>Learn something new</h1>
        </div>

        {/* Filter By */}
        <div className='h-auto my-10'>
            <BlogBy />
        </div>

        {/* Feature Article */}
        <div className='h-full mb-10'>
            <FeatureArticle />
        </div>
        <div>
            <Articles blogs={blogs} />
        </div>
    </div>;
};
