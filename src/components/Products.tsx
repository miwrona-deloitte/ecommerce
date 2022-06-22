import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/query/product';
import { CMSProduct } from '../model/Catalog/Product';
import furniture from './Furniture.module.scss';
import CatalogItem from './CatalogItem';

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <div>'Loading...'</div>;

  if (error) {
    // log error.message
    return <span>`No products found.`</span>;
  }

  const productsContentful: CMSProduct[] = data.productCollection.items;
  return (
    <div className={furniture.container}>
      {productsContentful.map(product => (
        <CatalogItem product={product} key={product.ecommerceId} />
      ))}
    </div>
  );
};

export default Products;
