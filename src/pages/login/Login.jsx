import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if(email && password){
        loginUser(email, password)
        .then(result => {
            navigate(from, {replace : true})
        })
        .catch(err => {

        })
        }
    }

    const handleGoogleLogin =() =>{
        googleAuth()
        .then(result =>{
            navigate(from, {replace : true})
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div className='flex justify-center items-center w-[100%] h-[95vh] bg-[#1f2735] '>
            <div className="w-[30rem]">
  <form onSubmit={handleLogin} className="bg-indigo-500 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 className='text-center text-2xl font-bold text-white mb-5'>Sign In</h1>
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
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
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

export default Login;