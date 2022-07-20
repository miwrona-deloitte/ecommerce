import { useDispatch } from 'react-redux';
import { Item, cartActions } from '../../store/index';
import styles from './QtyBlock.module.scss';

const QtyBlock: React.FC<{ item: Item }> = props => {
  const dispatch = useDispatch();

  const increaseQty = () => {
    dispatch(cartActions.increaseQty({ product: props.item, qty: 1 }));
  };
  const decreaseQty = () => {
    dispatch(cartActions.decreaseQty({ product: props.item, qty: 1 }));
  };

  return (
    <div className={styles.qtyBlock}>
      <span className={styles.label}>Amount</span>
      <div className={styles.qtyGroup}>
        <span onClick={increaseQty} className={styles.plus}>
          +
        </span>
        <span>{props.item.qty}</span>
        <span onClick={decreaseQty} className={styles.minus}>
          -
        </span>
      </div>
    </div>
  );
};

export default QtyBlock;
