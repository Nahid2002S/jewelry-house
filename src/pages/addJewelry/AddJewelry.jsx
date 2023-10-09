import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJewelry = () => {
    const {user} = useContext(AuthContext);

    const handleAddJewelry = () =>{
        event.preventDefault();

        const form = event.target;
        const photo = form.picture.value;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const ownerName = form.ownername.value;
        const ownerEmail = form.owneremail.value;

        const newJewelry = {photo, name, price, quantity, ownerName, ownerEmail};
        
        axios.post('https://jewelry-house-server.vercel.app/jewelry', newJewelry)
        .then(data => {
            if(data.data.insertedId){

                axios.patch(`https://jewelry-house-server.vercel.app/users/owner/${user.email}`)
                .then(data =>{
                    if(data.data.modifiedCount){
                        
                    }
                })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'New Jewelry Added Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
        })
    }

    return (
        <div className='px-48 pt-12 bg-[#1f2735] h-[90vh]'>
            <h1 className='text-3xl text-indigo-500 font-extrabold text-center mb-6'>Add A Jewelry</h1>
            <form onSubmit={handleAddJewelry} className='bg-gradient-to-r from-indigo-600 to-sky-950 text-white py-12 rounded-md'>
                <div className='flex justify-center gap-16'>
                <div className='w-[40%]'>
                    <label>
                        Picture Url: <br />
                        <input type="url" name='picture' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                    </label> <br />
                    <label htmlFor="">
                        Jewelry Name: <br />
                        <input type="text" name='name' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                    </label> <br />
                    <label htmlFor="">
                        Owner Name: <br />
                        <input readOnly defaultValue={user?.displayName} type="text" name='ownername' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                    </label> <br />
                </div>
                <div className='w-[40%]'>
                <label htmlFor="">
                        Price: <br />
                        <input type="text" name='price' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                </label> <br />
                <label htmlFor="">
                        Available Quantity: <br />
                        <input type="text" name='quantity' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                </label> <br />
                <label htmlFor="">
                        Owner Email: <br />
                        <input readOnly defaultValue={user?.email} type="text" name='owneremail' className='w-[100%] text-black px-4 py-2 rounded-md mb-2' />
                    </label> <br />
                </div>
                </div>
                <div className='px-16 mt-2'>
                    <button className='px-4 py-2 bg-indigo-500 w-full rounded-md'>Add Jewelry</button>
                </div>
            </form>
        </div>
    );
};

export default AddJewelry;