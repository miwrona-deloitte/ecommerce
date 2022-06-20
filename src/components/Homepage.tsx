import CatalogItem from './CatalogItem';
import { getProducts } from '../dictionary/products';
import styles from './Homepage.module.scss';
import furniture from './Furniture.module.scss';

const Homepage = () => {
  const products = getProducts();
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.card}>
          <div className={styles.bannerContent}>
            <h1>Our new collection</h1>
            <p>A new collection inspired by Scandinavian motifs.</p>
            <button>Check now!</button>
          </div>
        </div>
        <div className={styles.picture}></div>
      </div>
      <div className={styles.bestsellers}>
        <h2>Bestsellers</h2>
        <div className={furniture.container}>
          {products.map(product => (
            <CatalogItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
