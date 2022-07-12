import Cart from './Cart';
import styles from './Minicart.module.scss';
import { MinicartWrapper } from './Cart/styles';

const Minicart = () => {
  return (
    <div className={styles.minicart}>
      <MinicartWrapper>
        <Cart minicart={true} />
      </MinicartWrapper>
    </div>
  );
};

export default Minicart;
