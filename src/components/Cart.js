import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <li key={item.id}>
          <div>
            <h2>{item.name}</h2>
            <span>{item.price}</span>
            <img src={item.url} width="50" alt={item.name + " picture"} />
          </div>
        </li>
      ))}
      <span>Total: </span>
    </>
  );
};

export default Cart;
