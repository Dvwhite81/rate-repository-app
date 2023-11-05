import { View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import styles from '../styles';

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <AppBar />
      <RepositoryList />
    </View>
  )
}

export default Main
