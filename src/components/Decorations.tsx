import Filters from './Filters';
import styles from './Layout/Layout.module.scss';
import ProductsByCategory from './ProductsByCategory';

const Decorations: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Filters />
      <ProductsByCategory />
    </div>
  );
};

export default Decorations;
