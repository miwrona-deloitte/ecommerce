import { getProducts } from "../products";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const products = getProducts();
  let product = products.find(
    (product) => product.id === Number(props.productId)
  );
  let imgUrl = "/../../" + product.url;
  return (
    <>
      <Link to="/catalog">Catalog</Link>
      <div>
        <span>{product.name}</span>
        <img src={imgUrl} width="400" alt={imgUrl} />
        <button>Add To Cart</button>
      </div>
    </>
  );
};

export default ProductDetails;
