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
    disabled,
    inverted,
    formName,
    hideLabel
  } = props;

  return (
    <Form.Group controlId={`${formName}-${label}-input`}>
      <Form.Label style={{ display: hideLabel ? 'none' : 'inline-block' }}>
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        className={inverted ? 'CustomTextInputInverted' : 'CustomTextInput'}
        as={as}
        {...input}
        disabled={disabled}
      />
      <span style={{ fontWeight: 'bold' }}>{touched && error}</span>
    </Form.Group>
  );
};
