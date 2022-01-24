import React from 'react';


interface IProps {
    icon: React.ReactNode;
    text: string;
    className?: string
}

export const ServiceCard = ({ icon, text, className }: IProps) => {
    return <div className={`${className} w-full h-full group bg-[#111] transition ease-in hover:bg-[#ffbd39] py-10`} >
        <div className="flex flex-col  justify-center text-center items-center">
            <div>
                {icon}
            </div>
            <p className="text-white group-hover:text-black text-center font-semibold tracking-widest mb-4">
                {text}
            </p>
            <hr className='border group-hover:border-black  border-yellow-300 w-[40px]' />
        </div>
    </div>
};
