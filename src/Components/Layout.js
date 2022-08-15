import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};


export default Layout;