import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Minicart from '../Minicart';
import './Navbar.scss';

const Logo = () => (
  <div className='logo'>
    <NavLink to='/home'>Homly</NavLink>
  </div>
);
const Menu = () => (
  <nav className='menu'>
    <NavLink to='/home'>Home</NavLink>
    <NavLink to='about'>about</NavLink>
    <NavLink to='/new-collections'>New Collections</NavLink>
    <NavLink to='/decorations'>Decorations</NavLink>
    <NavLink to='/furniture'>Furniture</NavLink>
  </nav>
);
type props = { showMinicart: boolean; setShowMinicart: (showMinicart: boolean) => void };
const Tools = ({ showMinicart, setShowMinicart }: props) => {
  const counter = useSelector((state: RootState) => state.cart.counter);
  return (
    <div className='tools'>
      <ul>
        <li>
          <img src='/../../../pictures/search.svg' alt='search icon' />
          <span className='desc'>Search</span>
        </li>
        <li>
          <img src='/../../../pictures/profile.svg' alt='profile icon' />
          <span className='desc'>Profile</span>
        </li>
        <li>
          <img src='/../../../pictures/heart.svg' alt='heart icon' />
          <span className='desc'>Liked</span>
        </li>
        <li>
          <span className='counter'>{counter}</span>
          <img
            onClick={() => {
              setShowMinicart(!showMinicart);
            }}
            src='/../../../pictures/basket.svg'
            alt='cart icon'
          />
          <span className='desc'>Basket</span>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [showMinicart, setShowMinicart] = useState(false);
  return (
    <>
      <div className='navbar'>
        <div className='leftWrapper'>
          <Logo />
          <Menu />
        </div>
        <Tools showMinicart={showMinicart} setShowMinicart={setShowMinicart} />
      </div>
      {showMinicart && <Minicart />}
    </>
  );
};

export default Navbar;
