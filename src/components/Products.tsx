import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/query/product';
import { CMSProduct } from '../model/Catalog/Product';
import furniture from './Furniture.module.scss';
import CatalogItem from './CatalogItem';
import { getProducts } from '../dictionary/products';
import { useApolloClient } from '@apollo/client';
import { GET_VARIANTS } from '../graphql/query/product';
import { variantsActions } from '../store';
import { useDispatch } from 'react-redux';

const Products = () => {
  const client = useApolloClient();
  client
    .query({
      query: GET_VARIANTS,
    })
    .then(result => dispatch(variantsActions.updateVariants({ variants: result.data.variantCollection.items })));

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const dispatch = useDispatch();

  if (loading) return <div>'Loading...'</div>;

  let products;
  if (error) {
    console.log(error);
    products = getProducts();
  } else {
    const productsContentful: CMSProduct[] = data.productCollection.items;
    products = productsContentful;
  }

  return (
    <div className={furniture.container}>
      {products.map(product => (
        <CatalogItem product={product} key={product.productId} />
      ))}
    </div>
  );
};

export default Products;
