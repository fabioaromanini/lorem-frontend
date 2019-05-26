import React from 'react';
import Form from 'react-bootstrap/Form';

import './CustomTextInput.css';

export default props => {
  const { as, type, input, placeholder } = props;

  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      className="CustomTextInput"
      value={input.value}
      onChange={input.onChange}
      as={as}
    />
  );
};
