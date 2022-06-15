import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Minicart from '../Minicart';
import './Navbar.scss';

const Logo = () => <div className='logo'>Homly</div>;

const Menu = () => (
  <nav className='menu'>
    <Link to='/'>Home</Link>
    <Link to='/catalog'>New Collections</Link>
    <Link to='/catalog'>Decorations</Link>
    <Link to='/furniture'>Furniture</Link>
  </nav>
);

const Tools = () => {
  const counter = useSelector((state: RootState) => state.cart.counter);
  const [showMinicart, setShowMinicart] = useState(false);
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
          {/* <span className='counter'>{counter}</span> */}
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
        <Tools />
      </div>
      {showMinicart && <Minicart />}
    </>
  );
};

export default Navbar;
