import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
      <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-indigo-500 font-bold' : '')}>Home</NavLink></li>
      <li><NavLink to='/all-jewelry' className={({ isActive }) => (isActive ? 'text-indigo-500 font-bold' : '')}>All Jewelry</NavLink></li>
      <li><NavLink to='/my-jewelry'  className={({ isActive }) => (isActive ? 'text-indigo-500 font-bold' : '')}>My Jewelry</NavLink></li>
      <li><NavLink to='/add-jewelry'  className={({ isActive }) => (isActive ? 'text-indigo-500 font-bold' : '')}>Add Jewelry</NavLink></li>
      <li><a>Blogs</a></li>
      <li><NavLink to='/dashboard/dashboard-home'  className={({ isActive }) => (isActive ? 'text-indigo-500 font-bold' : '')}>Dashboard</NavLink></li>
      {
        !user && <li><NavLink to='/register'  className={({ isActive }) => (isActive ? 'text-indigo-500 font-bold' : '')}>Register</NavLink></li>
      }
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
  {
    user && <label title={user.name} tabIndex={0} className="btn btn-ghost btn-circle avatar">
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