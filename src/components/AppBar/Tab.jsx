import { View } from 'react-native';
import Text from '../Text';
import styles from '../../styles';

const Tab = ({ text }) => {
  return (
    <View style={styles.tab}>
      <Text
        color={'white'}
        fontSize={'subheading'}
        fontWeight={'bold'}
      >
        {text}
      </Text>
    </View>
  );
};

export default Tab;
