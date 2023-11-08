import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order, searchKeyword) => {
  const [repositories, setRepositories] = useState();
  const result = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: order.orderBy,
      orderDirection: order.orderDirection,
      searchKeyword: searchKeyword
    },
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepositories = async () => {
    if (result.data) {
      setRepositories(result.data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [result]);

  return {
    repositories,
    loading: result.loading,
    refetch: fetchRepositories
  };
};

export default useRepositories;
