import { connect } from 'react-redux';

import Form from './Form';

const mapStateToProps = ({ contactForm }) => {
  const { name, email, message } = contactForm;
  return {
    name,
    email,
    message
  };
};

const connectedForm = connect(mapStateToProps)(Form);

export default connectedForm;
