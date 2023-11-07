import { FlatList, Pressable, View } from 'react-native';
import { useNavigate } from 'react-router-dom';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import styles from '../styles';
import useRepositories from '../hooks/useRepositories';

export const RepositoryListContainer = ({ repositories }) => {
  const ItemSeparator = () => <View style={styles.separator} />;
  const navigate = useNavigate();
  const RenderItem = ({ item }) => {
    return (
      <Pressable onPress={() => navigate(`/${item.id}`)} >
        <RepositoryItem item={item} />
      </Pressable>
    );
  };
const KeyExtractor = (item, index) => index.toString();
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
