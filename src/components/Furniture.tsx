import Filters from './Filters';
import Products from './Products';
import styles from './Layout/Layout.module.scss';

const Furniture: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Filters />
      <Products />
    </div>
  );
};

export default Furniture;
