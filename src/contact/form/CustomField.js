import React from 'react';
import Form from 'react-bootstrap/Form';

export default props => {
  const { as, type, input, placeholder } = props;

  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      className="Form-input"
      value={input.value}
      onChange={input.onChange}
      as={as}
    />
  );
};
