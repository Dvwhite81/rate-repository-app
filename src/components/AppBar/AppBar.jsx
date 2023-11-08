import { View, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import AppTab from './AppTab';
import styles from '../../styles';
import { GET_USER } from '../../graphql/queries';

const AppBar = () => {
  const { data } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  });

  return (
    <View style={styles.appBarContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle} horizontal>
        <AppTab path={'/'} activeStyle={{ color: 'red' }} text='Repositories' />
        {data && data.me === null
          ? (
            <>
              <AppTab path={'/signin'} activeStyle={{ color: 'red' }} text='Sign In' />
              <AppTab path={'/signup'} activeStyle={{ color: 'red' }} text='Sign Up' />
            </>
          )
          : (
            <>
              <AppTab path={'/review'} activeStyle={{ color: 'red' }} text='Create A Review' />
              <AppTab path={'/signout'} activeStyle={{ color: 'red' }} text='Sign Out' />
            </>
          )
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;
