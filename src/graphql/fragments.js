import { gql } from '@apollo/client';

export const REPO_DETAILS = gql`
  fragment RepoDetails on Repository {
    id
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
  }
`;

export const CREATE_REVIEW_DETAILS = gql`
  fragment CreateReviewDetails on Review {
    id
    user {
      id
      username
    }
    userId
    repositoryId
    rating
    createdAt
    text
  }
`;

export const CREATE_USER_DETAILS = gql`
  fragment CreateUserDetails on User {
    id
    username
    createdAt
    reviews {
      edges {
        node {
          user {
            username
          }
          rating
          createdAt
          text
        }
      }
    }
    reviewCount
  }
`;
