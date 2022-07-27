import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query {
    categoryCollection(limit: 100) {
      items {
        name
        id
        path
        hasParent
        link
      }
    }
  }
`;
