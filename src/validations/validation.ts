import * as yup from 'yup';
export const profilevalidationschema = yup.object({
  images: yup.string().required(' add the image '),
  fullname: yup
    .string()
    .required('nothing provided ')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  nickname: yup
    .string()
    .required(' minimum 6 ')
    .min(6, 'nickname is too short - should be 6 chars minimum.'),
  dateofbirth: yup.date().required('i need date '),
  email: yup
    .string()
    .email('Please enter valid Schema')
    .required('Email adrees is required '),
  phonenumber: yup
    .number()
    .min(10, 'need 10 characters')
    .required('please include number'),
  gender: yup.string().required('select with following with options'),
});

export const loginvalidationschema = yup.object({
  email: yup
    .string()
    .email('Please enter valid Schema')
    .required('Email adrees is required '),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  termsandconditions: yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
});
