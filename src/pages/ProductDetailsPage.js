import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();
  return <ProductDetails productId={params.productId}></ProductDetails>;
};

export default ProductDetailsPage;
