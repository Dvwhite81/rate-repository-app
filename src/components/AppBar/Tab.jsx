import { View } from 'react-native';
import Text from '../Text';

const Tab = ({ text }) => {
  return (
    <View>
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
