import axios from 'axios';
import React, { useState } from 'react';

const AllJewelry = () => {
    const [jewelrys, setJewelrys] = useState([]);

    axios.get('http://localhost:5000/jewelry')
    .then(data => setJewelrys(data.data));

    console.log(jewelrys)

    return (
        <div className='px-20 bg-[#1f2735] py-5 h-[91vh]'>
            <h1 className='text-3xl font-bold py-3 text-white mb-2'>All Jewelry: {jewelrys.length}</h1>
            <div className='grid grid-cols-3'>
                {
                    jewelrys.map(jewelry => <div key={jewelry._id} className="card w-96 bg-indigo-300 shadow-xl">
                    <figure><img src={jewelry.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{jewelry.name}</h2>
                       <p>Price: {jewelry.price}</p>
                       <p>Availaible Quantity: {jewelry.quantity}</p>
                       <p>Owner Name: {jewelry.ownerName}</p>
                       <p>Owner Email: {jewelry.ownerEmail}</p>
                      <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default AllJewelry;