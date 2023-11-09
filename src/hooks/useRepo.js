import { useQuery } from '@apollo/client';
import { GET_REPO } from '../graphql/queries';

const useRepo = (id, first) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPO, {
    variables: { id, first },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    console.log('repo handleFetch')
    console.log('repo data:', data)
    console.log('repo hasNext:', data?.repository.reviews.pageInfo.hasNextPage)
    if (!canFetchMore) {
      console.log('repo false')
      return;
    }
    console.log('repo true')

    fetchMore({
      variables: {
        id,
        first,
        after: data.repository.reviews.pageInfo.endCursor,
      }
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
    ...result
  };
};

export default useRepo;
