import { View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Tab from './Tab';
import styles from '../styles';

const AppBar = () => {
  return (
    <View style={styles.appBarContainer}>
      <ScrollView horizontal>
        <Link to='/' activeStyle={{ color: 'red' }}>
          <Tab text='Repositories' />
        </Link>
        <Link to='/signin' activeStyle={{ color: 'red' }}>
         <Tab text='Sign in' />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
