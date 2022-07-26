import React from 'react';
import Navbar from './Navbar';
import styles from './Layout.module.scss';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../store/categoriesSlice';
const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  dispatch(getCategories());
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
