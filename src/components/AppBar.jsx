import { View, Pressable } from 'react-native';
import Text from './Text';
import styles from '../styles';

const AppBar = () => {
  return (
    <View style={styles.appBarContainer}>
      <Pressable>
        <Text
          color={'white'}
          fontSize={'subheading'}
          fontWeight={'bold'}
          >
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
