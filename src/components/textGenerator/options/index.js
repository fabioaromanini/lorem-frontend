import React from 'react';
import { reduxForm } from 'redux-form';

import OptionsForm from './OptionsForm';

const reduxFormWrapper = reduxForm({
  form: 'options',
  initialValues: {
    unity: 'words'
  }
});

const WrappedForm = reduxFormWrapper(OptionsForm);

export default props => {
  return <WrappedForm onSubmit={props.onSubmit} />;
};
