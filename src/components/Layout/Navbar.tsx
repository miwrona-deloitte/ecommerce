import { Link } from 'react-router-dom'
import './Navbar.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Minicart from '../Minicart';

const Tools = () => {
    const counter = useSelector((state: RootState) => state.cart.counter);
  const [showMinicart, setShowMinicart] = useState(false);
    return (
    <span style={{ position: "absolute", right: "10%", cursor: "pointer" }}>
    {counter}
    <img
      onClick={() => {
        setShowMinicart(!showMinicart);
      }}
      src="/../../../pictures/cart.png"
      width="30px"
      alt="cart icon"
    />
  </span>
  );
};

const Navbar = () => {
  const [showMinicart, setShowMinicart] = useState(false);
    return (
        <>
        <div>
            <nav style={{ textAlign: "center" }} className='navbar'>
                <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> |{" "}
                <Link to="/catalog">Catalog</Link>
            </nav>
            <Tools />
        </div>
        {showMinicart && <Minicart />}
      </>
    );
};

export default Navbar;