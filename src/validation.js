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

export const ReviewSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .positive()
    .integer()
    .min(0)
    .max(100),
  textext: yup
    .string()
});
