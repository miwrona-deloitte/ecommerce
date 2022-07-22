import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_CATEGORY_ID } from '../graphql/query/product';
import { CMSProduct } from '../model/Catalog/Product';
import furniture from './Furniture.module.scss';
import CatalogItem from './CatalogItem';

const ProductsByCategory = (props: { categoryId?: number }) => {
  let products: CMSProduct[] = [];
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_CATEGORY_ID, {
    variables: { categoryId: props.categoryId ?? 141 },
  });

  if (error) {
    return <div>No products</div>;
  }

  if (loading) {
    return <h2>Wait a minute, requestiong products ...</h2>;
  }
  products = data.productCollection.items;
  return (
    <div className={furniture.container}>
      {products.map(product => (
        <CatalogItem product={product} key={product.productId} />
      ))}
    </div>
  );
};

export default ProductsByCategory;
