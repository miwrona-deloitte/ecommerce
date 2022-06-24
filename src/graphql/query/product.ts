import { gql } from '@apollo/client';

export const GET_PRODUCT_BY_ID = gql`
  query ($productId: String) {
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

export const CMS_HOME_PAGE = gql`
  query {
    page(id: "7LGVV1c0P3mb9co7ZFthQd") {
      banner {
        json
        links {
          entries {
            inline {
              sys {
                id
              }
            }
            block {
              sys {
                id
              }
            }
          }
          assets {
            block {
              title
              url
              size
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_ENTRY_ID = gql`
  query ($entryId: String!) {
    product(id: $entryId) {
      name
      ecommerceId
      price
      picture {
        url
        title
      }
    }
  }
`;

export const GET_VARIANTS_BY_ID = gql`
  query ($ecommerceId: Int) {
    variantCollection(where: { ecommerceId: $ecommerceId }) {
      items {
        variantId
        ecommerceId
        color
        picture {
          url
          title
        }
      }
    }
  }
`;
