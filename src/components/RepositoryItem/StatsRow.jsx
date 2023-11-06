import { View } from 'react-native';
import StatColumn from './StatColumn';
import styles from '../../styles';

const StatsRow = ({ item }) => {
  const parseCount = (count) => {
    return count < 1000 ? count : (count / 1000).toFixed(1) + 'k';
  };

  const stars = parseCount(item.stargazersCount);
  const forks = parseCount(item.forksCount);
  const reviews = parseCount(item.reviewCount);

  return (
    <View style={[styles.flexRow, styles.statsRow]}>
      <StatColumn text='Stars' stat={stars} />
      <StatColumn text='Forks' stat={forks} />
      <StatColumn text='Reviews' stat={reviews} />
      <StatColumn text='Rating' stat={item.ratingAverage} />
    </View>
  );
};

export default StatsRow;
