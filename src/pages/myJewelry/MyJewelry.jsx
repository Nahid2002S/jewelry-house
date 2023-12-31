import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import axios from 'axios';

const MyJewelry = () => {

    const {user} = useContext(AuthContext);
    const [myJewelry, setMyJewelry] = useState([]);

    axios.get(`https://jewelry-house-server.vercel.app/jewelry/${user.email}`)
    .then(data => setMyJewelry(data.data));

    console.log(myJewelry)

    return (
        <div className='px-20 bg-[#1f2735] py-5]'>
        <h1 className='text-3xl font-bold py-3 text-white'>My Jewelry: {myJewelry.length}</h1>
        <div className='grid grid-cols-3 gap-4'>
            {
                myJewelry.map(jewelry => <div key={jewelry._id} className="card w-80 bg-indigo-300 shadow-xl">
                <figure><img src={jewelry.photo} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{jewelry.name}</h2>
                   <p>Price: {jewelry.price}</p>
                   <p>Availaible Quantity: {jewelry.quantity}</p>
                  <div className="card-actions justify-start">
                    <button className="btn btn-danger">DELETE</button>
                  </div>
                </div>
              </div>)
            }
        </div>
    </div>
    );
};

export default MyJewelry;