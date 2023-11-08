import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import SignInForm from './Form/SignInForm';
import { SignInSchema } from '../validation';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: ''
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = ({ setMessage, setModalVisible }) => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const sendMessage = (newMessage) => {
    setMessage(newMessage);
    setModalVisible(true);
    setTimeout(() => {
      setMessage('');
      setModalVisible(false);
    }, 5000);
  };

  const onSubmit = async (values) => {
    console.log('values: ', values);
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/');
      sendMessage('Signed in!');
    } catch (e) {
      console.log(e);
      sendMessage(e.message);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export default SignIn;
