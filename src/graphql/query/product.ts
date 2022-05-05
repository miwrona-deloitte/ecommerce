import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_ID = gql`
query($productId: String) {
  productCollection(where: { ecommerce_id: $productId }) {
    items {
      name
      ecommerceId
      price
      picture {
        url
        title
      }
    }
  }
}
`;

export const GET_PRODUCTS = gql`
query {
  productCollection(limit: 10) {
    items {
      name
      ecommerceId
      price
      picture {
        url
        title
      }
    }
  }
}
`;