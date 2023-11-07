import { View } from 'react-native';
import ReviewCircle from './ReviewCircle';
import ReviewInfo from './ReviewInfo';
import styles from '../../../styles';

const ReviewItem = ({ item }) => {

  return (
    <View style={styles.card}>
      <View style={styles.infoRow}>
        <ReviewCircle item={item} />
        <ReviewInfo item={item} />
      </View>
     </View>
  );
};

export default ReviewItem;
