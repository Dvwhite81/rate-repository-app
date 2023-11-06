import { Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from '../Text';
import styles from '../../styles';

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
      <Pressable style={{ width: '90%' }} onPress={onSubmit}>
        <Text style={styles.submitButton}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
