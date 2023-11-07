import { View } from 'react-native';
import Text from '../../Text';
import styles from '../../../styles';

const ReviewCircle = ({ item }) => {
  return (
    <View style={styles.imageCol}>
      <Text style={styles.reviewCircle}>{item.rating}</Text>
    </View>
  );
};

export default ReviewCircle;
