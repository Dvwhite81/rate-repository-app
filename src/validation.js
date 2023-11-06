import * as yup from 'yup';

// ...

export const SignInSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(4, 'Too Short!'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Too Short!'),
});
