import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useMyReviews = () => {
  const { data, loading, refetch, ...result } = useQuery(GET_USER, {
    variables: { includeReviews: true },
  });
  console.log('data :', data)
  console.log('result:', result);

  return {
    data: data ? data.me : undefined,
    refetch,
    loading,
    ...result,
  };
};

export default useMyReviews;
