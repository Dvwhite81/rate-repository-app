import { gql } from '@apollo/client';
import { CREATE_REVIEW_DETAILS, CREATE_USER_DETAILS } from './fragments';

export const LOGIN = gql`
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
      ...CreateReviewDetails
    }
  }
  ${CREATE_REVIEW_DETAILS}
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(
      user: { username: $username, password: $password}
    ) {
      ...CreateUserDetails
    }
  }
  ${CREATE_USER_DETAILS}
`;
