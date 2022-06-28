import Cart from './Cart';
import styles from './Minicart.module.scss';

type props = { setShowMinicart: (showMinicart: boolean) => void };
const Minicart = ({ setShowMinicart }: props) => {
  return (
    <div className={styles.minicart}>
      <span className={styles.close} onClick={() => setShowMinicart(false)}>
        x
      </span>
      <Cart />
    </div>
  );
};

export default Minicart;
