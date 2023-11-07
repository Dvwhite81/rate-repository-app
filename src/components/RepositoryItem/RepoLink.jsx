import { Linking, Pressable } from 'react-native';
import Text from '../Text';
import styles from '../../styles';


const RepoLink = ({ style, item }) => {
  return (
    <Pressable style={styles.repoLink} onPress={() => Linking.openURL(item.url)}>
      <Text style={style}>Open In GitHub</Text>
    </Pressable>
  );
};

export default RepoLink;
