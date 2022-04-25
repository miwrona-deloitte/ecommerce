import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Layout from "./Layout/Layout";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Cart;
