/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Heading1 } from '../../../components/headings/Heading1';
import { LightHeading } from '../../../components/headings/LightHeading';
import { COLORS } from '../../utils/colors';


const Skills: { type: string, level: number }[] = [
    { type: "HTML", level: 90 },
    { type: "CSS", level: 75 },
    { type: "Tailwind CSS", level: 90 },
    { type: "Javascript", level: 90 },
    { type: "Typescript", level: 69 },
    { type: "React JS", level: 90 },
    { type: "Next JS", level: 85 },
    { type: "Node JS", level: 80 },
    { type: "Express JS", level: 80 },
    { type: "Foal TS", level: 80 },
    { type: "Nest JS", level: 60 },
    { type: "Strapi", level: 70 },
    { type: "Squarespace", level: 90 },
    { type: "Wordpress", level: 80 },
]


export const SkillSection = () => {
    return <div className='h-full w-full'>
        <div className='relative text-center'>
            <LightHeading text='Skills' className='tracking-wider sm:text-7xl xs:text-6xl xss:text-5xl' />
            <Heading1 text='My Skills' className='absolute text-center w-full top-0 sm:mb-3 font-bold text-4xl xs:text-3xl xss:text-2xl' />
        </div>
        <div className='grid my-16 gap-10 w-full lg:grid-cols-2 md:grid-cols-1'>
            <div className='lg:block justify-self-center md:block sm:hidden xs:hidden xss:hidden'>
                <div className="mb-4">
                    <img src="/img2.jpg" className="max-w-full h-auto  mx-auto  " alt="" />
                </div>
                <div className='text-center'>
                    <Heading1 text="Who's this guy?" className='font-bold text-3xl tracking-wider italic'
                    />
                    <Heading1 className='font-medium mt-5' color={COLORS.primary} text="I'm a Full-Stack Web Developer in Bahawalpur, Punjab.
                    I have serious passion for creating intuitive, dynamic user experiences." />
                </div>
            </div>
            <div className='align-self-center'>
                {Skills.map(skill => {
                    return <div key={skill.type} className='my-2'>
                        <p className='font-bold text-xl'>{skill.type}</p>
                        <div className="w-full bg-gray-200 rounded-full">
                            <div className="bg-yellow-500 text-xs text-black font-bold  text-center p-0.5 leading-none rounded-l-full" style={{ width: `${skill.level}%` }}> {skill.level}%</div>
                        </div>
                    </div>

                })}
            </div>
        </div>
    </div>;
};
