import { FlatList } from 'react-native';
import { View } from 'react-native';
import useRepo from '../../hooks/useRepo';
import useReviews from '../../hooks/useReviews';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './Reviews/ReviewItem';
import styles from '../../styles';

const SingleRepo = () => {
  const { repo } = useRepo();
  const details = repo ? repo : {};

  const { reviews } = useReviews();
  const reviewNodes = reviews
  ? reviews.edges.map(edge => edge.node)
  : [];
  console.log('reviews:', reviews);
  console.log('nodes:', reviewNodes);

  const ItemSeparator = () => <View style={styles.separator} />;
  const RenderItem = ({ item }) => <ReviewItem item={item} />;

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RenderItem}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={details} />}
    />
  );
};

export default SingleRepo;
