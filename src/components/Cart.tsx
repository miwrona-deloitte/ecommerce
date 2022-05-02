import { useSelector } from "react-redux";
import { RootState } from "../store";
import RemoveItem from "./Cart/RemoveItem";
import QtyBlock from "./Cart/QtyBlock";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <li key={item.id}>
          <div>
            <h2>{item.name}</h2>
            <span>{item.price}$</span>
            <QtyBlock item={item} />
            <img src={item.url} width="50" alt={item.name + " picture"} />
            <RemoveItem itemId={item.id} />
          </div>
        </li>
      ))}
      <span>Total: </span>
    </>
  );
};

export default Cart;
