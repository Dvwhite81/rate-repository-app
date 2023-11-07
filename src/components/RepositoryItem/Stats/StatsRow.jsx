import { View } from 'react-native';
import StatColumn from './StatColumn';
import styles from '../../../styles';

export const parseCount = (count) => {
  return count < 1000 ? count : (count / 1000).toFixed(1) + 'k';
};

const StatsRow = ({ item }) => {
  const stars = parseCount(item.stargazersCount);
  const forks = parseCount(item.forksCount);
  const reviews = parseCount(item.reviewCount);

  return (
    <View style={[styles.flexRow, styles.statsRow]}>
      <View testID='stars'>
        <StatColumn text='Stars' stat={stars} />
      </View>
      <View testID='forks'>
        <StatColumn text='Forks' stat={forks} />
      </View>
      <View testID='reviews'>
        <StatColumn text='Reviews' stat={reviews} />
      </View>
      <View testID='ratings'>
        <StatColumn text='Rating' stat={item.ratingAverage} />
      </View>
    </View>
  );
};

export default StatsRow;
