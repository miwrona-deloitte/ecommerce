import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

const RemoveItem: React.FC<{itemId: number}> = (props) => {
  const dispatch = useDispatch();
  const removeFromCart = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(cartActions.removeFromCart({itemId: props.itemId}))
  };

  const removeSign : React.CSSProperties = {
    cursor: "pointer"
  };

  return (
    <span style={removeSign} onClick={removeFromCart}>
      <img src="/../../../pictures/trash.ico" alt="trash icon"/>
    </span>
  );
}

export default RemoveItem;
