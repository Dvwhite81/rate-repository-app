import { Image, View } from 'react-native';
import styles from '../../styles';

const CardImage = ({ src }) => {
  return (
    <View style={styles.flexCol}>
      <Image
        style={styles.img}
        source={{
          uri: src,
        }}
      />
    </View>
  );
};

export default CardImage;
