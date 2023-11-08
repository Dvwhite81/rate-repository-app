import { Pressable, View } from 'react-native';
import FormikTextInput from '../../Form/FormikTextInput';
import Text from '../../Text';
import styles from '../../../styles';

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeholder='Review' multiline />
      <Pressable style={{ width: '90%' }} onPress={onSubmit}>
        <Text style={styles.submitButton}>Create A Review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
