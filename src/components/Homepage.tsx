import CatalogItem from './CatalogItem';
import { getProducts } from '../dictionary/products';
import './Homepage.scss';

const Homepage = () => {
  const products = getProducts();
  return (
    <>
      <div className='banner'>
        <div className='card'>
          <div className='banner-content'>
            <h1>Our new collection</h1>
            <p>A new collection inspired by Scandinavian motifs.</p>
            <button>Check now!</button>
          </div>
        </div>
        <div className='picture'></div>
      </div>
      <div className='bestsellers'>
        <h2>Bestsellers</h2>
        <div className='container'>
          {products.map(product => (
            <CatalogItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
