import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";

const ProductDetailsPage: React.FC = () => {
  const params = useParams<{ productId: string }>();
  return <ProductDetails productId={params.productId}></ProductDetails>;
};

export default ProductDetailsPage;
