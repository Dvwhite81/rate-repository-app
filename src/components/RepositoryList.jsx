import { FlatList, View } from 'react-native';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import styles from '../styles';
import { repositories } from '../data';

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  )
};

export default RepositoryList;
