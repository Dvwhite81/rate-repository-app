import { View } from 'react-native';
import Text from '../../Text';
import styles from '../../../styles';

const StatColumn = ({ text, stat }) => {
  return (
    <View style={styles.flexCol}>
      <Text style={[styles.fontWeightBold, styles.centerText]}>{stat}</Text>
      <Text style={styles.centerText}>{text}</Text>
    </View>
  );
};

export default StatColumn;
