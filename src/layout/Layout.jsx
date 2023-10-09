import React from 'react';
import Header from '../shared/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/header/footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;