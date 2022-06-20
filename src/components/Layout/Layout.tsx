import React from 'react';
import Navbar from './Navbar';
import styles from './Layout.module.scss';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layout}>
        <Navbar />
        <main className={styles.content}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
