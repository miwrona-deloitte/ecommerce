import { getProducts } from "../products";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const products = getProducts();
  let product = products.find(
    (product) => product.id === Number(props.productId)
  );
  let imgUrl = "/../../" + product.url;

  const addToCartHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.addToCart({product:  product}));
  };

  return (
    <>
      <Link to="/catalog">Catalog</Link>
      <div>
        <span>{product.name}</span>
        <img src={imgUrl} width="400" alt={imgUrl} />
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </>
  );
};

export default ProductDetails;
