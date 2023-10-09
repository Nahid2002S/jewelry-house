import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
       <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center bg-[#1f2735]">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2bg-[#1f2735] " aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#2f3e58] text-white text-semibold ">
      {/* Sidebar content here */}
      <li><Link to='/dashboard/dashboard-home' className='hover:text-indigo-500 font-semibold'>Dashboard Home</Link></li>
      <li><Link to='/dashboard/my-jewelry' className='hover:text-indigo-500 font-semibold'>My Jewelry</Link></li>
      <li><Link to='/dashboard/add-jewelry' className='hover:text-indigo-500 font-semibold'>Add Jewelry</Link></li>
      <div className="divider divider-primary"></div>
      <li><Link to='/' className='hover:text-indigo-500 font-semibold'>Home</Link></li>
    </ul> 
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;