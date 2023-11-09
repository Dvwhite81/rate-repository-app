import { gql } from '@apollo/client';
import { REVIEW_DETAILS, USER_DETAILS } from './fragments';

export const SIGN_IN = gql`
  mutation authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview(
    $ownerName: String!,
    $repositoryName: String!,
    $rating: Int!,
    $text: String
  ) {
    createReview(
      review: {
        ownerName: $ownerName,
        repositoryName: $repositoryName,
        rating: $rating,
        text: $text
      }
    ) {
      ...ReviewDetails
    }
  }
  ${REVIEW_DETAILS}
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(
      user: { username: $username, password: $password}
    ) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;
