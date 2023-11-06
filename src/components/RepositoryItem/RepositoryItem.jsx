import { View } from 'react-native'
import InfoRow from './InfoRow';
import StatsRow from './StatsRow';
import styles from '../../styles';

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <InfoRow item={item} />
      <StatsRow item={item} />
    </View>
  )
}

export default RepositoryItem
