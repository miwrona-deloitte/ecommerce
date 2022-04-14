import { Link } from "react-router-dom";
import { getProducts } from "../products";

const ProductList = () => {
  const products = getProducts();
  return (
    <div>
      <Link to="/">Home</Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <span>ID: {product.id}</span>
              <Link to={`/pdp/${product.id}`}>
                <div>
                  <span>{product.name}</span>
                  <img src={product.url} width="100" alt={product.name} />
                </div>
                {console.log(product.url)}
              </Link>
              <span>{product.price} $</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
