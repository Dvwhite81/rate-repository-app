import * as yup from 'yup';

export const SignInSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required')
    .min(5, 'Too Short!'),
  password: yup.string()
    .required('Password is required')
    .min(5, 'Too Short!'),
});

export const ReviewSchema = yup.object().shape({
  ownerName: yup.string()
    .required('Repository owner name is required'),
  repositoryName: yup.string()
    .required('Repository name is required'),
  rating: yup.number()
    .required('Rating is required')
    .positive()
    .integer()
    .min(0)
    .max(100),
  textext: yup.string(),
});

export const SignUpSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required')
    .min(5, 'Too Short!')
    .max(30, 'Too Long!'),
  password: yup.string()
    .required('Password is required')
    .min(5, 'Too Short!')
    .max(50, 'Too Long!'),
  confirm: yup.string()
    .required('Password confirmation is required')
    .oneOf(
      [yup.ref('password'), null],
      'Passwords must match'
    ),
});
