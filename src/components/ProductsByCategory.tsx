import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_CATEGORIES, GET_PRODUCT_BY_CATEGORY_ID } from '../graphql/query/product';
import { CMSProduct } from '../model/Catalog/Product';
import furniture from './Furniture.module.scss';
import CatalogItem from './CatalogItem';
import CategoryService from '../service/CategoryService';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ProductsByCategory = (props: { categoryId?: number }) => {
  let products: CMSProduct[] = [];
  const categories = useSelector((state: RootState) => state.categories.items);
  const categoryService = new CategoryService(categories);
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_CATEGORY_ID, {
    variables: { categoryId: props.categoryId },
  });
  const {
    loading: loadingMinor,
    error: errorMinor,
    data: dataMinor,
  } = useQuery(GET_PRODUCTS_BY_CATEGORIES, {
    variables: { categoryIds: props.categoryId ? categoryService.getLeafsIdsByMinorId(props.categoryId) : [] },
  });
  if (error || errorMinor) {
    return <div>No products</div>;
  }

  if (loading || loadingMinor) {
    return <h2>Wait a minute, requestiong products ...</h2>;
  }
  if (props.categoryId && categoryService.isMinor(props.categoryId)) {
    products = dataMinor.productCollection.items;
  } else {
    products = data.productCollection.items;
  }
  return (
    <div className={furniture.container}>
      {products.map(product => (
        <CatalogItem product={product} key={product.productId} />
      ))}
    </div>
  );
};

export default ProductsByCategory;
