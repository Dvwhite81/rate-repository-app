import { FlatList, View } from 'react-native';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import styles from '../styles';
import useRepositories from '../hooks/useRepositories';

const ItemSeparator = () => <View style={styles.separator} />;
const RenderItem = ({ item }) => <RepositoryItem item={item} />;
const KeyExtractor = (item, index) => index.toString();

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RenderItem}
      keyExtractor={KeyExtractor}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
