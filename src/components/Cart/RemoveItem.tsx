import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import styles from './RemoveItem.module.scss';

const RemoveItem: React.FC<{ itemId: number }> = props => {
  const dispatch = useDispatch();
  const removeFromCart = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(cartActions.removeFromCart({ itemId: props.itemId }));
  };

  return (
    <span onClick={removeFromCart} className={styles.removeSign}>
      <img src='/../../../pictures/trash.ico' alt='trash icon' />
    </span>
  );
};

export default RemoveItem;
