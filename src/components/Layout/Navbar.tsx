import { NavLink } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Minicart from '../Minicart';
import styles from './Navbar.module.scss';
import useHideMinicart from '../../hooks/useHideMinicart';
import { ReactNode } from 'react';

const Logo = () => (
  <div className={styles.logo}>
    <NavLink to='/home'>Homly</NavLink>
  </div>
);
const Menu = () => (
  <nav className={styles.menu}>
    <NavLink to='/home'>Home</NavLink>
    <NavLink to='about'>about</NavLink>
    <NavLink to='/new-collections'>New Collections</NavLink>
    <NavLink to='/decorations'>Decorations</NavLink>
    <NavLink to='/furniture'>Furniture</NavLink>
    <NavLink to='/cart'>Cart</NavLink>
  </nav>
);
type props = { showMinicart: boolean; setShowMinicart: (showMinicart: boolean) => void };
const Tools = ({ showMinicart, setShowMinicart }: props) => {
  const counter = useSelector((state: RootState) => state.cart.counter);
  return (
    <div className={styles.tools}>
      <ul>
        <li>
          <img src='/../../../pictures/search.svg' alt='search icon' />
          <span className={styles.desc}>Search</span>
        </li>
        <li>
          <img src='/../../../pictures/profile.svg' alt='profile icon' />
          <span className={styles.desc}>Profile</span>
        </li>
        <li>
          <img src='/../../../pictures/heart.svg' alt='heart icon' />
          <span className={styles.desc}>Liked</span>
        </li>
        <li
          onClick={() => {
            setShowMinicart(!showMinicart);
          }}
        >
          <span>
            <img src='/../../../pictures/basket.svg' alt='cart icon' />
            <span className={styles.desc}>
              Basket
              {typeof counter === 'number' && counter > 0 && ' (' + counter + ')'}
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [showMinicart, setShowMinicart] = useState(false);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftWrapper}>
          <Logo />
          <Menu />
        </div>
        <Tools showMinicart={showMinicart} setShowMinicart={setShowMinicart} />
      </div>
      {showMinicart && (
        <HideMinicartWrapper setShowMinicart={setShowMinicart}>
          <Minicart />
        </HideMinicartWrapper>
      )}
    </>
  );
};

type minicartWrapperProps = {
  setShowMinicart: (showMinicart: boolean) => void;
  children: ReactNode;
};
const HideMinicartWrapper = (props: minicartWrapperProps) => {
  const wrapperRef = useRef(null);
  useHideMinicart(wrapperRef, props.setShowMinicart);
  return <div ref={wrapperRef}>{props.children}</div>;
};

export default Navbar;
