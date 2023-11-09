import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, searchKeyword, first) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, searchKeyword, first },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    console.log('handleFetch');
    if (!canFetchMore) {
      console.log('false')
      return;
    }

    console.log('true')

    fetchMore({
      variables: {
        orderBy,
        orderDirection,
        searchKeyword,
        first,
        after: data.repositories.pageInfo.endCursor,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
