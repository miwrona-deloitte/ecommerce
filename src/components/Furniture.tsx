import './CatalogItem.scss';
import Filters from './Filters';
import CatalogItem from './CatalogItem';
import { getProducts } from '../dictionary/products';

const Furniture: React.FC = () => {
  const products = getProducts();
  return (
    <>
      <Filters />
      <div className='container'>
        {products.map(product => (
          <CatalogItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Furniture;
