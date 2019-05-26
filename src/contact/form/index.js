import { connect } from 'react-redux';
import * as actions from '../../actions/contactForm';

import Form from './Form';

const mapStateToProps = ({ contactForm }) => {
  const { name, email, message } = contactForm;
  return {
    name,
    email,
    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: form => dispatch(actions.submitForm(form))
  };
};

const connectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default connectedForm;
