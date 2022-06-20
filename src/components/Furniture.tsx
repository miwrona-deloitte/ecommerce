import Filters from './Filters';
import CatalogItem from './CatalogItem';
import { getProducts } from '../dictionary/products';
import styles from './Furniture.module.scss';

const Furniture: React.FC = () => {
  const products = getProducts();
  return (
    <>
      <Filters />
      <div className={styles.container}>
        {products.map(product => (
          <CatalogItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Furniture;
