import { Pressable, View } from 'react-native';
import Text from './Text';
import styles from '../styles';

const LanguageButton = ({ language }) => {
  return (
    <View style={styles.flexRow}>
      <Pressable>
        <Text style={styles.button}>{language}</Text>
      </Pressable>
    </View>
  );
};

export default LanguageButton;
