import { View } from 'react-native';
import ReviewCircle from '../../RepositoryItem/Reviews/ReviewCircle';
import MyReviewInfo from './MyReviewInfo';
import ReviewButtons from './ReviewButtons';
import styles from '../../../styles';

const MyReviewItem = ({ item, handleDelete }) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoRow}>
        <ReviewCircle item={item} />
        <MyReviewInfo item={item} />
      </View>
      <ReviewButtons item={item} handleDelete={handleDelete} />
     </View>
  );
};

export default MyReviewItem;
