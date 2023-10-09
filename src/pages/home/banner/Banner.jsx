import React from 'react';
import banner from '../../../assets/images/banner.png';

const Banner = () => {
    return (
            <div className='flex justify-between items-center px-20 bg-[#1f2735] h-[91vh]'>
            <div>
                <h1 className='font-extrabold text-7xl text-indigo-500 mb-4'>JEWELRY HOUSE</h1>
                <p className='font-semibold text-gray-200 mb-5'>The Ultimate Solution Of Your Day To Day Life Make-Over. Create A Elite Version <br /> Of Your Self By Jewelry From Jewelry House.</p>
                <button className='px-8 py-2 rounded-md bg-indigo-600 text-white font-semibold'>Explore</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;