import { View } from 'react-native';
import CardImage from './CardImage';
import LanguageButton from './LanguageButton';
import Text from './Text';
import styles from '../styles';

const InfoRow = ({ item }) => {
  return (
    <View style={styles.infoRow}>
      <View style={styles.imageCol}>
        <CardImage src={item.ownerAvatarUrl} />
      </View>
      <View style={styles.infoCol}>
        <Text style={styles.heading}>{item.fullName}</Text>
        <Text style={styles.textWrap}>{item.description}</Text>
        <LanguageButton language={item.language} />
      </View>
    </View>
  );
};

export default InfoRow;
