import { FlatList, Pressable, View } from 'react-native';
import { useNavigate } from 'react-router-dom';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import Sorter from './Sorter/Sorter';
import useRepositories from '../hooks/useRepositories';
import styles from '../styles';
import { useState } from 'react';

export const RepositoryListContainer = ({ repositories, navigate, setOrder }) => {
  const ItemSeparator = () => <View style={styles.separator} />;
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
      ListHeaderComponent={<Sorter handleOrder={setOrder} />}
    />
  );
};

const RepositoryList = () => {
  const defaultOrder = {
    value: 'latest',
    label: 'Latest Repositories',
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC'
  };
  const [order, setOrder] = useState(defaultOrder);
  const { repositories } = useRepositories(order);
  const navigate = useNavigate();

  return <RepositoryListContainer
    repositories={repositories}
    navigate={navigate}
    setOrder={setOrder}
  />;
};

export default RepositoryList;
