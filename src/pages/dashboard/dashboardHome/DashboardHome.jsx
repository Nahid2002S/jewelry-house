import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../authProvider/AuthProvider';

const DashboardHome = () => {
    const {user} = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState({});

    axios.get(`https://jewelry-house-server.vercel.app/users/${user?.email}`)
    .then(data => setCurrentUser(data.data));


    return (
        <div>
            <h1 className='text-3xl font-bold mb-3'>Profile:</h1>
            <div className='flex justify-between items-center gap-20 bg-indigo-500 text-white font-bold px-12 py-6 rounded-lg text-2xl'>
            <div>
                <img src={currentUser?.photoUrl} className='w-[10rem] h-[10rem] rounded-full border-2px ' alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <h1>Name: {currentUser?.name}</h1>
                <h2>Email: {currentUser?.email}</h2>
                <h2>Role: {currentUser?.role}</h2>
            </div>
        </div>
        </div>
    );
};

export default DashboardHome;