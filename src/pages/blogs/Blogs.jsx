import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-2xl pb-3 font-bold px-20 bg-[#1f2735]  text-white'>All Blogs</h1>
            <div className='grid grid-cols-2 gap-4 bg-[#1f2735] py-4 px-20'>
            <div className='bg-indigo-500 text-white p-5 rounded-lg'>
                <h1 className='font-semibold text-xl'>What is Jewelry??</h1>
                <p>Jewelry, objects of personal adornment prized for the craftsmanship going into their creation and generally for the value of their components as well. Stomacher brooch with emeralds and enamel flowers on gold, from the treasure of the Virgin of Pilar, mid-17th century; in the Victoria and Albert Museum, London.</p>
            </div>
            <div className='bg-indigo-500 text-white p-5 rounded-lg'>
                <h1 className='font-semibold text-xl'>How do you identify real Jewelry?</h1>
                <p>One way to tell if a gemstone is real or fake is to check its weight. Generally, synthetic gemstones have a higher density than their natural counterparts, so fake stones tend to be heavier. Of course, this method is not foolproof, as there can be some variation in weight even among genuine gemstones.</p>
            </div>
        </div>
        </div>
    );
};

export default Blogs;