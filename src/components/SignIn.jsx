import { Formik } from 'formik';
import SignInForm from './Form/SignInForm';

const initialValues = {
  username: '',
  password: ''
};

const SignIn = () => {
  const onSubmit = values => {
    console.log('values: ', values);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
