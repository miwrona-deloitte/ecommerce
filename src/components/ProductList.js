import { Link } from "react-router-dom";
import { getProducts } from "../products";

const ProductList = () => {
  const products = getProducts();
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>ID: {product.id}</span>
            <Link to={`/pdp/${product.id}`}>
              <span>{product.name}</span>
            </Link>
            <span>{product.price} $</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
