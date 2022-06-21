import Cart from './Cart';
import styles from './Minicart.module.scss';

type props = { setShowMinicart: (showMinicart: boolean) => void };
const Minicart = ({ setShowMinicart }: props) => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '105px',
        top: '40px',
        border: 'solid 1px grey',
        borderRadius: '10px',
        padding: '5px',
        zIndex: '3',
        backgroundColor: 'white',
      }}
    >
      <span className={styles.close} onClick={() => setShowMinicart(false)}>
        x
      </span>
      <Cart />
    </div>
  );
};

export default Minicart;
