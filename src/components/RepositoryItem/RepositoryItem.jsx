import { View } from 'react-native';
import InfoRow from './Info/InfoRow';
import StatsRow from './Stats/StatsRow';
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
