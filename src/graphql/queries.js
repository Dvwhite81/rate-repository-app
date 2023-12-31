import { gql } from "@apollo/client";
import {
  PAGE_INFO,
  REPOSITORY_DETAILS,
  REVIEW_DETAILS,
  USER_DETAILS,
} from "./fragments";

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
        ...PageDetails
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${PAGE_INFO}
`;

export const GET_USER = gql`
  query getCurrentUser(
    $includeReviews: Boolean = false
    $first: Int
    $after: String
  ) {
    me {
      ...UserDetails
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
          }
          cursor
        }
        pageInfo {
          ...PageDetails
        }
      }
    }
  }
  ${USER_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO}
`;

export const GET_REPO = gql`
  query getRepository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryDetails
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewDetails
          }
          cursor
        }
        pageInfo {
          ...PageDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO}
`;

export const GET_REVIEWS = gql`
  query($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
