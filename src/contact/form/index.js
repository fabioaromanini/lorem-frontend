import React from 'react';
import { reduxForm } from 'redux-form';

import Form from './Form';

const reduxFormWrapper = reduxForm({
  form: 'contact'
});

const WrappedForm = reduxFormWrapper(Form);

export default () => {
  return <WrappedForm onSubmit={data => console.log(data)} />;
};
