import React from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../products";

const ProductList: React.FC = () => {
  const products = getProducts();
  return (
    <div>
      <Link to="/">Home</Link> | {" "} 
      <Link to="/cart">Cart</Link>
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
