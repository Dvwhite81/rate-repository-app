import { format } from 'date-fns';
import { parseISO } from 'date-fns';
import { View } from 'react-native';
import Text from '../../Text';
import styles from '../../../styles';

const ReviewInfo = ({ item }) => {
  const getDate = (createdAt) => {
    const date = parseISO(createdAt);
    const formatted = format(date, 'MM-dd-yyyy');
    return formatted;
  };
  return (
    <View style={styles.infoCol}>
      <Text style={styles.heading}>
        {item.user.username}
      </Text>
      <Text style={styles.colorGray}>
        {getDate(item.createdAt)}
      </Text>
      <Text style={styles.textWrap}>
        {item.text}
      </Text>
    </View>
  );
};

export default ReviewInfo;
