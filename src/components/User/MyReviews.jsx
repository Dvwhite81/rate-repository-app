import { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import ReviewItem from '../RepositoryItem/Reviews/ReviewItem';
import useMyReviews from '../../hooks/useMyReviews';
import Text from '../Text';
import styles from '../../styles';

const MyReviews = () => {
  const [reviews, setReviews] = useState();
  const { data } = useMyReviews();
  console.log('data:', data);

  useEffect(() => {
    if (data) {
      setReviews(data.reviews.edges.map(edge => edge.node));
      console.log('reviews:', reviews);
    }
  }, [data]);

  return reviews?.length > 0 ? (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem item={item} />}
      keyExtractor={item => item.id}
    />
  ) : (
    <View>
      <Text style={[styles.centerText, styles.fullWidth, styles.heading]}>No reviews to show</Text>
    </View>
  )
};
export default MyReviews;
