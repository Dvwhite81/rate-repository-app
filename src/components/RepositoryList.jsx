import { FlatList, Pressable, View } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import Sorter from './Sorter/Sorter';
import useRepositories from '../hooks/useRepositories';
import styles from '../styles';
import { useState } from 'react';

export const RepositoryListContainer = ({
  repositories,
  navigate,
  setOrder,
  searchKeyword,
  setSearchKeyword,
  onEndReach
}) => {
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
      ListHeaderComponent={<Sorter
        handleOrder={setOrder}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
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
  const [searchKeyword, setSearchKeyword] = useState('');
  const [bouncedKeyword] = useDebounce(searchKeyword, 500);

  const orderBy = order.orderBy;
  const orderDirection = order.orderDirection;
  const first = 4;
  const { repositories, fetchMore } = useRepositories(orderBy, orderDirection, bouncedKeyword, first);
  const navigate = useNavigate();

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer
    repositories={repositories}
    navigate={navigate}
    setOrder={setOrder}
    searchKeyword={searchKeyword}
    setSearchKeyword={setSearchKeyword}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;
