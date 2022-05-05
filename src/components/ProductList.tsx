import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/query/product";

const ProductList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <div>'Loading...'</div>;

  if (error) {
    // log error.message
    return <span>`No products found.`</span>;
  }

  const productsContentful = data.productCollection.items;
  return (
    <>
      <h2>Products</h2>
      <ul>
        {productsContentful.map((product: any) => (
          <li key={product.ecommerceId}>
            <div>
              <span>ID: {product.ecommerceId}</span>
              <Link to={`/pdp/${product.ecommerceId}`}>
                <div>
                  <span>{product.name}</span>
                  <img
                    src={product.picture.url}
                    width="100"
                    alt={product.picture.name}
                  />
                </div>
              </Link>
              <span>{product.price} $</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
