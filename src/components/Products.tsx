import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/query/product';
import { CMSProduct } from '../model/Catalog/Product';
import furniture from './Furniture.module.scss';
import CatalogItem from './CatalogItem';
import { getProducts } from '../dictionary/products';

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <div>'Loading...'</div>;

  let products;
  if (error) {
    // log error.message
    products = getProducts();
  } else {
    const productsContentful: CMSProduct[] = data.productCollection.items;
    products = productsContentful;
  }

  return (
    <div className={furniture.container}>
      {products.map(product => (
        <CatalogItem product={product} key={product.ecommerceId} />
      ))}
    </div>
  );
};

export default Products;
