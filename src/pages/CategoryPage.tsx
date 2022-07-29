import ProductsByCategory from '../components/ProductsByCategory';
import { useParams } from 'react-router-dom';
import Furniture from '../components/Furniture';

const CategoryPage = () => {
  const params = useParams<{ categoryId: string }>();
  if (typeof params.categoryId !== 'string') {
    return <Furniture />;
  }
  return (
    <div>
      <ProductsByCategory categoryId={parseInt(params.categoryId)} />
    </div>
  );
};

CategoryPage.props = {
  categoryId: '',
};

export default CategoryPage;
