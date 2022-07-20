import { useSelector } from 'react-redux';
import { RootState } from '../store';
import RemoveItem from './Cart/RemoveItem';
import QtyBlock from './Cart/QtyBlock';
import styles from './Cart.module.scss';
import { NavLink } from 'react-router-dom';

const Cart: React.FC<{ minicart: boolean }> = props => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart.total);
  const counter = useSelector((state: RootState) => state.cart.counter);
  const cart = (
    <div className={props.minicart ? styles.minicart : styles.cart}>
      <h1 className={styles.header}>Basket ({counter})</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <div className={styles.item}>
              <div className={styles.imageGroup}>
                <img src={item.url} width={props.minicart ? 163 : 200} alt={item.name + ' picture'} />
              </div>
              <div className={styles.itemDetails}>
                <div className={styles.firstLine}>
                  <p className={styles.itemName}>{item.name}</p>
                  <RemoveItem itemId={item.id} />
                </div>
                <div className={styles.sizeGroup}>
                  <span className={styles.label}>Size</span>
                  <span>100 x 220 cm</span>
                </div>
                <div className={styles.colorGroup}>
                  <span className={styles.label}>Color</span>
                  <div className={styles.colorValue}>
                    <span>Dark brown</span>
                    <span className={styles.circle} style={{ backgroundColor: item.color }}></span>
                  </div>
                </div>
                <div className={styles.priceGroup}>
                  <span className={styles.label}>Price</span>
                  <span>{item.price} zł</span>
                </div>
                <QtyBlock item={item} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.summaryGroup}>
        <span>Summary</span>
        <span>{cartTotal.toFixed(2)} zł</span>
      </div>
      {props.minicart && (
        <NavLink to='/cart'>
          <button className={styles.btn100}>Go to the basket</button>
        </NavLink>
      )}
    </div>
  );

  const emptyState = (
    <div>
      <p>Basket is empty</p>
    </div>
  );

  return counter !== 0 ? cart : emptyState;
};

export default Cart;
