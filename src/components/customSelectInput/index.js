import React from 'react';
import Form from 'react-bootstrap/Form';

import './CustomSelectInput.css';

export default props => {
  const {
    input,
    label,
    disabled,
    inverted,
    options,
    formName,
    hideLabel
  } = props;

  return (
    <Form.Group controlId={`${formName}-${label}-input`}>
      <Form.Label style={{ display: hideLabel ? 'none' : 'inline-block' }}>
        {label}
      </Form.Label>
      <Form.Control
        disabled={disabled}
        as="select"
        className={inverted ? 'CustomSelectInputInverted' : 'CustomSelectInput'}
        {...input}
      >
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};
