import { FlatList } from 'react-native';
import { View } from 'react-native';
import { useParams } from 'react-router-native';
import useRepo from '../../hooks/useRepo';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './Reviews/ReviewItem';
import styles from '../../styles';

const SingleRepo = () => {
  const { id } = useParams();
  const first = 3;
  const { repository, fetchMore } = useRepo(id, first);

  const details = repository ? repository : {};

  const reviewNodes = repository
  ? repository.reviews.edges.map(edge => edge.node)
  : [];

  const ItemSeparator = () => <View style={styles.separator} />;
  const RenderItem = ({ item }) => <ReviewItem item={item} />;

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RenderItem}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={details} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepo;
