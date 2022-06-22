import Products from './Products';
import styles from './Homepage.module.scss';

const Homepage = () => {
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
        <Products />
      </div>
    </>
  );
};

export default Homepage;
