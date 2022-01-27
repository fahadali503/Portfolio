import React from 'react';

export const BlogBy = () => {
    return <div className='h-full'>
        <div className='mt-10'>
            <h1 className='font-semibold tracking-widest'>Search Blog by Topics</h1>
        </div>
        <div className='grid w-[70%] h-full mt-5 pl-6 gap-4 grid-cols-8'>
            <div>
                <span className='px-5 duration-200 border-2 border-[#2E3039] hover:border-yellow-300 py-3 rounded-full cursor-pointer bg-[#2E3039]'>Nextjs</span>
            </div>
        </div>
    </div>;
};
