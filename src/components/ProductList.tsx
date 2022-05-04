import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const ProductList: React.FC = () => {
  const PRODUCTS_FROM_CMS = gql`
    query {
      productCollection(limit: 10) {
        items {
          name
          ecommmerceId
          price
          picture {
            url
            title
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(PRODUCTS_FROM_CMS);
  if (loading) return <div>'Loading...'</div>;

  if (error) return <span>`Error! ${error.message}`</span>;

  const productsContentful = data.productCollection.items;
  return (
    <>
      <h2>Products from Contentful</h2>
      <ul>
        {productsContentful.map((product: any) => (
          <li key={product.ecommmerceId}>
            <div>
              <span>ID: {product.ecommmerceId}</span>
              <Link to={`/pdp/${product.ecommmerceId}`}>
                <div>
                  <span>{product.name}</span>
                  <img src={product.picture.url} width="100" alt={product.picture.name} />
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
