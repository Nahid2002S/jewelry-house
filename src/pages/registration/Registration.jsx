import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

    const {registerUser, updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoUrl = form.photo.value;

        if(password == confirmPassword){
            registerUser(email,password)
        .then(result => {
            updateUser(name, photoUrl)
            if(!result.user){
                navigate('/register');
            }
            navigate('/');
        })
        .catch(err => {

        })
        }     
    }

    return (
        <div className='flex justify-center items-center w-[100%] h-[95vh] bg-[#1f2735] '>
            <div className="w-[30rem]">
  <form onSubmit={handleRegister} className="bg-indigo-500 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
    <h1 className='text-center text-2xl font-bold text-white mb-5'>Sign Up</h1>
    <div className="mb-3">
      <label className="block text-gray-200 text-sm font-bold mb-2" >
        Username
      </label>
      <input name='name' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-3">
      <label className="block text-gray-200 text-sm font-bold mb-2" >
        Email
      </label>
      <input name='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email"/>
    </div>
    <div className="mb-3">
      <label className="block text-gray-200 text-sm font-bold mb-2" >
        Password
      </label>
      <input name='password' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********"/>
    </div>
    <div className="mb-3">
      <label className="block text-gray-200 text-sm font-bold mb-2" >
        Confirm Password
      </label>
      <input name='confirmPassword' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="**********"/>
    </div>
    <div className="mb-3">
      <label className="block text-gray-200 text-sm font-bold mb-2" >
        Photo Url
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="photo" type="url" placeholder="**********"/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign Up
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2023 Jewelry house All rights reserved.
  </p>
</div>
        </div>
    );
};

export default Registration;