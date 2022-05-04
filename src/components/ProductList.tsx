import React from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../products";
import { gql, useQuery } from "@apollo/client";

const ProductList: React.FC = () => {
  const products = getProducts();
  return (
    <>
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
      <Products />
    </>
  );
};

const Products = () => {
  const PRODUCTS_FROM_CMS = gql`
    query {
      productCollection(limit: 10) {
        items {
          name
          ecommmerceId
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(PRODUCTS_FROM_CMS);
  if (loading) return <div>'Loading...'</div>;

  if (error) return <span>`Error! ${error.message}`</span>;

  const productsContentful = data.productCollection.items;
  return (
    <div>
      <h2>Products from Contentful</h2>
      <ul>
        {productsContentful.map((item: any) => (
          <li key={item.ecommmerceId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
