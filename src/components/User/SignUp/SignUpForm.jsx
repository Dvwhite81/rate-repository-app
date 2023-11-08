import { Pressable, View } from 'react-native';
import FormikTextInput from '../../Form/FormikTextInput';
import Text from '../../Text';
import styles from '../../../styles';

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
      <FormikTextInput name='confirm' placeholder='Password confirmation' secureTextEntry={true} />
      <Pressable style={{ width: '90%' }} onPress={onSubmit}>
        <Text style={styles.submitButton}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
