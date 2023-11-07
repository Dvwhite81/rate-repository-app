import { View } from 'react-native';
import InfoRow from './InfoRow';
import StatsRow from './StatsRow';
import RepoLink from './RepoLink';
import styles from '../../styles';

const RepositoryItem = ({ item }) => {
  return (
    <View testID='repositoryItem' style={styles.card}>
      <InfoRow item={item} />
      <StatsRow item={item} />
      {item.url &&
        <RepoLink style={styles.submitButton} item={item} />
      }
    </View>
  );
};

export default RepositoryItem;
