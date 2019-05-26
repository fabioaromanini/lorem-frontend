import React from 'react';
import { reduxForm } from 'redux-form';

import Form from './Form';

const reduxFormWrapper = reduxForm({
  form: 'contact'
});

const ReduxForm = reduxFormWrapper(Form);

export default () => {
  return <ReduxForm onSubmit={data => console.log(data)} />;
};
