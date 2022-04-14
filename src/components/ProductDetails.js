import { getProducts } from "../products";
const ProductDetails = (props) => {
  const products = getProducts();
  let product = products.find(
    (product) => product.id === Number(props.productId)
  );
  let imgUrl = "/../../" + product.url;
  // console.log(imgUrl);
  return (
    <div>
      <span>{product.name}</span>
      <img src={imgUrl} width="400" alt={imgUrl} />
    </div>
  );
};

export default ProductDetails;
