import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
        <div>
        {children}
        </div>
      <Footer/>
    </>
  );
};

export default Layout;