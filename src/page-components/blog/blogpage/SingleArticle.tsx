/* eslint-disable @next/next/no-img-element */
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';
import { COLORS } from '../../../utils/colors';
import { IBlog } from '../../../utils/types';


interface IProps {
    blog: IBlog
}

export const SingleArticle = ({ blog }: IProps) => {
    const router = useRouter();

    return <div onClick={() => router.push(`/blog/${blog.id}`)}>
        <div>
            <img className='h-96 rounded-md' src={blog.coverImage.url} alt="Single Article" />
        </div>
        <div>
            <h1 className={`pt-1 text-lg text-[${COLORS.lightBlue}] font-bold tracking-normal`}>{moment(blog.createdAt).format("YYYY")}</h1>
            <h1 className='py-2 font-bold text-2xl'>{blog.title}</h1>
        </div>

    </div>;
};
