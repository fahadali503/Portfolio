import React from 'react';
import Lottie from 'react-lottie-player';
import loading from '../public/loading.json';


export const Loader = () => {
    return <div className='h-screen w-screen'>
        <div
            className=' flex justify-center items-center h-full'>
            <Lottie loop animationData={loading}
                speed={0.5}
                play
                style={{ width: 300, height: 300 }}
            />
        </div>
    </div>
};
