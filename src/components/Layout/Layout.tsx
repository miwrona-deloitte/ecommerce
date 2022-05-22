import React from 'react';
import Navbar from './Navbar';
import './Layout.scss';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='layout'>
        <Navbar />
        <main className='content'>{children}</main>
      </div>
    </>
  );
};

export default Layout;
