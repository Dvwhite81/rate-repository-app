import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = () => {
  const id = useParams().id;
  const [reviews, setReviews] = useState();
  const result = useQuery(GET_REVIEWS, {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
  });

  const fetchReviews = async () => {
    if (result.data) {
      setReviews(result.data.repository.reviews);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [result]);

  return {
    reviews,
    loading: result.loading,
    refetch: fetchReviews
  };
};

export default useReviews;
