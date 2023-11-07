import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-native';
import { GET_REPO } from '../graphql/queries';

const useRepo = () => {
  const id = useParams().id;
  const [repo, setRepo] = useState();
  const result = useQuery(GET_REPO, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
  });

  const fetchRepo = async () => {
    if (result.data) {
      setRepo(result.data.repository);
    }
  };

  useEffect(() => {
    fetchRepo();
  }, [result]);

  return {
    repo,
    loading: result.loading,
    refetch: fetchRepo
  };
};

export default useRepo;
