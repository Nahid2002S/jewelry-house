import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () =>{
      logOut();
  }
 
    return (
        <div>
            <div className="navbar bg-[#1f2735] text-white px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl font-bold">Jewelry House</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/' className='hover:text-blue-500'>Home</Link></li>
      <li><a>All Jewelry</a></li>
      <li><a>My Jewelry</a></li>
      <li><a>Add Jewelry</a></li>
      <li><a>Blogs</a></li>
      {
        !user && <li><Link to='/register'>Register</Link></li>
      }
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
  {
    user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img src={user.photoURL} />
    </div>
  </label>
  }
  {
    !user ? <Link to='/login' className="btn btn-primary">Login</Link> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>
  }
  </div>
</div>
        </div>
    );
};

export default Header;