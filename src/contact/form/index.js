import React from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios';

import Form from './Form';

const { REACT_APP_BACKEND_URL } = process.env;

const submitForm = async form => {
  await axios.post(`${REACT_APP_BACKEND_URL}/email`, form);
};

const reduxFormWrapper = reduxForm({
  form: 'contact'
});

const WrappedForm = reduxFormWrapper(Form);

export default () => {
  return <WrappedForm onSubmit={data => submitForm(data)} />;
};
