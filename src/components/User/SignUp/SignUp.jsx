import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { SignUpSchema } from '../../../validation';
import useSignUp from '../../../hooks/useSignUp';
import useSignIn from '../../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
  confirm: ''
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
};

export default SignUp;
