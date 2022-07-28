import { NavLink } from 'react-router-dom';
import { useState, useRef, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, minicartActions } from '../../store';
import Minicart from '../Minicart';
import styles from './Navbar.module.scss';
import './Navbar.scss';
import useHideMinicart from '../../hooks/useHideMinicart';
import { ReactNode } from 'react';
import { Categories } from '../Categories';
import { MutableRefObject } from 'react';
import React from 'react';
import CategoryService from '../../service/CategoryService';

const Logo = () => (
  <div className={styles.logo}>
    <NavLink to='/home'>Homly</NavLink>
  </div>
);
export const NavbarContext = React.createContext({ setShowCategories: (showCategory: showCategoryState) => {} });

export type MenuItemType = { id?: number | null; title: string; url: string; cms?: boolean };
const MenuItem = ({ id, title, url }: MenuItemType) => {
  const context = useContext(NavbarContext);
  return (
    <NavLink
      onMouseEnter={() => {
        context.setShowCategories({ show: true, category: id });
      }}
      onMouseLeave={() => {
        context.setShowCategories({ show: false, category: null });
      }}
      className={({ isActive }) => (isActive ? 'underline' : undefined)}
      to={url}
    >
      {title}
    </NavLink>
  );
};

const Menu = () => {
  const categoriesCMS = useSelector((state: RootState) => state.categories.items);
  const categoryService = new CategoryService(categoriesCMS);
  const mains = categoryService.getMainCategories();

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
      title: 'Cart',
      url: '/cart',
    },
  ];

  return (
    <nav className={styles.menu}>
      {items.concat(mains).map(function (item, idx) {
        return <MenuItem id={item.id} title={item.title} url={item.url} key={idx} />;
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

export type showCategoryState = {
  show: boolean;
  category?: number | null;
};
const Navbar = () => {
  const [showMinicart, setShowMinicart] = useState(false);
  const [showCategories, setShowCategories] = useState<showCategoryState>({ show: false, category: null });
  const showMinicartRedux = useSelector((state: RootState) => state.minicart.visible);
  const toolsRef = useRef(null);
  return (
    <>
      <NavbarContext.Provider value={{ setShowCategories: setShowCategories }}>
        <div className={styles.navbar} ref={toolsRef}>
          <div className={styles.leftWrapper}>
            <Logo />
            <Menu />
            <Categories showCategories={showCategories} />
          </div>
          <Tools showMinicart={showMinicart} setShowMinicart={setShowMinicart} />
        </div>
      </NavbarContext.Provider>
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
