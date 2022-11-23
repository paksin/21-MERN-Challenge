import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Query {
    me {
      _id
      bookCount
      email
      username
      savedBooks {
        authors
        bookId
        description
        image
        title
      }
    }
  }
`;
