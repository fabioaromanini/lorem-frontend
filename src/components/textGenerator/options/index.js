import React from 'react';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import OptionsForm from './OptionsForm';

const selector = formValueSelector('options');

const reduxFormWrapper = reduxForm({
  form: 'options',
  initialValues: {
    unity: 'words',
    quantity: 20
  }
});

const ConnectedForm = connect(state => {
  const unity = selector(state, 'unity');
  return {
    unity
  };
})(OptionsForm);

const WrappedForm = reduxFormWrapper(ConnectedForm);

export default props => {
  return <WrappedForm onSubmit={props.onSubmit} />;
};
