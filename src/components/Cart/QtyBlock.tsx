import { useDispatch } from "react-redux";
import { Item, cartActions } from "../../store/index";

const QtyBlock: React.FC<{ item: Item }> = (props) => {
  const dispatch = useDispatch();

  const increaseQty = () => {
    dispatch(cartActions.increaseQty({ product: props.item, qty: 1 }));
  };
  const decreaseQty = () => {
    dispatch(cartActions.decreaseQty({ product: props.item }));
  };

  return (
    <div>
      <span> QTY: {props.item.qty}</span>
      <button onClick={increaseQty}>+</button>
      <button onClick={decreaseQty}>-</button>
    </div>
  );
};

export default QtyBlock;
