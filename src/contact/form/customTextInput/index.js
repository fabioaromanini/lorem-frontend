import React from 'react';
import Form from 'react-bootstrap/Form';

import './CustomTextInput.css';

export default props => {
  const {
    as,
    type,
    input,
    placeholder,
    meta: { touched, error },
    label,
    disabled
  } = props;

  return (
    <Form.Group controlId={`Contact-${label}-input`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        className="CustomTextInput"
        as={as}
        {...input}
        disabled={disabled}
      />
      <span style={{ fontWeight: 'bold' }}>{touched && error}</span>
    </Form.Group>
  );
};
