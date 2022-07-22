import { NavLink } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, minicartActions } from '../../store';
import Minicart from '../Minicart';
import styles from './Navbar.module.scss';
import './Navbar.scss';
import useHideMinicart from '../../hooks/useHideMinicart';
import { ReactNode } from 'react';
import { Categories } from '../Categories';
import { MutableRefObject } from 'react';

const Logo = () => (
  <div className={styles.logo}>
    <NavLink to='/home'>Homly</NavLink>
  </div>
);

type MenuItemType = { title: string; url: string };
const MenuItem = ({ title, url }: MenuItemType) => {
  return (
    <NavLink className={({ isActive }) => (isActive ? 'underline' : undefined)} to={url}>
      {title}
    </NavLink>
  );
};

const Menu = () => {
  const items: MenuItemType[] = [
    {
      title: 'Home',
      url: '/home',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'New Collections',
      url: '/new-collections',
    },
    {
      title: 'Decorations',
      url: '/decorations',
    },
    {
      title: 'Furniture',
      url: '/furniture',
    },
    {
      title: 'Cart',
      url: '/cart',
    },
  ];

  return (
    <nav className={styles.menu}>
      {items.map(function (item, idx) {
        return <MenuItem title={item.title} url={item.url} key={idx} />;
      })}
    </nav>
  );
};
type props = { showMinicart: boolean; setShowMinicart: (showMinicart: boolean) => void };
const Tools = ({ showMinicart, setShowMinicart }: props) => {
  const counter = useSelector((state: RootState) => state.cart.counter);
  const dispatch = useDispatch();
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
            dispatch(minicartActions.showMinicart({ visible: !showMinicart }));
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
  const [showCategories, setShowCategories] = useState(false);
  const showMinicartRedux = useSelector((state: RootState) => state.minicart.visible);
  const toolsRef = useRef(null);

  return (
    <>
      <div className={styles.navbar} ref={toolsRef}>
        <div
          className={styles.leftWrapper}
          onMouseEnter={() => {
            setShowCategories(true);
          }}
          onMouseLeave={() => {
            setShowCategories(false);
          }}
        >
          <Logo />
          <Menu />
          {showCategories && <Categories heading='Furniture' />}
        </div>
        <Tools showMinicart={showMinicart} setShowMinicart={setShowMinicart} />
      </div>
      {showMinicartRedux && (
        <HideMinicartWrapper setShowMinicart={setShowMinicart} toolsRef={toolsRef}>
          <Minicart />
        </HideMinicartWrapper>
      )}
    </>
  );
};

type minicartWrapperProps = {
  setShowMinicart: (showMinicart: boolean) => void;
  toolsRef: MutableRefObject<Node | null>;
  children: ReactNode;
};
const HideMinicartWrapper = (props: minicartWrapperProps) => {
  const dispatch = useDispatch();
  const toggleMinicart = (flag: boolean) => {
    dispatch(minicartActions.showMinicart({ visible: flag }));
  };
  const wrapperRef = useRef(null);
  useHideMinicart(wrapperRef, toggleMinicart, props.toolsRef);
  return <div ref={wrapperRef}>{props.children}</div>;
};

export default Navbar;
