import { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../../../graphql/mutations';
import MyReviewItem from './MyReviewItem';
import useMyReviews from '../../../hooks/useMyReviews';
import Text from '../../Text';
import styles from '../../../styles';

const MyReviews = () => {
  const [reviews, setReviews] = useState();
  const [deleteReview, result] = useMutation(DELETE_REVIEW);

  const { data, refetch } = useMyReviews();

  useEffect(() => {
    if (data) {
      setReviews(data.reviews.edges.map(edge => edge.node));
    }
  }, [data]);

  useEffect(() => {
    if (result?.data?.deleteReview) {
      refetch();
    }
  }, [result.data]);

  const handleDeleteReview = async (id) => {
    await deleteReview({
      variables: { id },
    });
  };

  return reviews?.length > 0 ? (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <MyReviewItem item={item} handleDelete={handleDeleteReview} />}
      keyExtractor={item => item.id}
    />
  ) : (
    <View>
      <Text style={[styles.centerText, styles.fullWidth, styles.heading]}>No reviews to show</Text>
    </View>
  )
};
export default MyReviews;
