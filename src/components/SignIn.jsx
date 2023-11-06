import { Formik } from 'formik';
import SignInForm from './Form/SignInForm';
import { SignInSchema } from '../validation';

const initialValues = {
  username: '',
  password: ''
};

const SignIn = () => {
  const onSubmit = values => {
    console.log('values: ', values);
  }

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
