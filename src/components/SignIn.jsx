import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import SignInForm from './Form/SignInForm';
import { SignInSchema } from '../validation';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
  username: '',
  password: ''
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log('values: ', values);
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

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

export default SignIn;
