import React from 'react';
import { IBlog } from '../../../utils/types';
import { SingleArticle } from './SingleArticle';
import Link from 'next/link';

interface IProps {
    blogs: IBlog[]
}
export const Articles = ({ blogs }: IProps) => {
    return <div>
        {blogs.map(blog => {
            return <SingleArticle blog={blog} key={blog.id} />
        })}
    </div>;
};
