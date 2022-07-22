import { gql } from '@apollo/client';

export const GET_PRODUCT_BY_ID = gql`
  query ($productId: String) {
    productCollection(where: { productId: $productId }) {
      items {
        name
        productId
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
        productId
        price
        picture {
          url
          title
        }
        thumb {
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
      productId
      price
      picture {
        url
        title
      }
    }
  }
`;

export const GET_VARIANTS_BY_ID = gql`
  query ($productId: Int) {
    variantCollection(where: { productId: $productId }) {
      items {
        variantId
        productId
        color
        picture {
          url
          title
        }
      }
    }
  }
`;

export const GET_VARIANTS = gql`
  query {
    variantCollection(limit: 10) {
      items {
        variantId
        productId
        color
        picture {
          url
          title
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_CATEGORY_ID = gql`
  query ($categoryId: Int) {
    productCollection(where: { categoryId: $categoryId }) {
      items {
        name
        productId
        categoryId
        price
        picture {
          url
          title
        }
      }
    }
  }
`;
