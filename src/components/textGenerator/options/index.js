import React from 'react';
import { reduxForm } from 'redux-form';

import OptionsForm from './OptionsForm';

const reduxFormWrapper = reduxForm({
  form: 'options',
  initialValues: {
    unity: 'words',
    quantity: 20
  }
});

const WrappedForm = reduxFormWrapper(OptionsForm);

export default props => {
  return <WrappedForm onSubmit={props.onSubmit} />;
};
