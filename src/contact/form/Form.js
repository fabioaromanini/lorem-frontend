import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { Field } from 'redux-form';
import CustomTextInput from './customTextInput';

export default props => {
  const { handleSubmit } = props;

  const onSubmit = async data => {
    handleSubmit(data);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="MyFormEmail">
              <Form.Label>Email</Form.Label>
              <Field name="email" component={CustomTextInput} type="email" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="MyFormName">
              <Form.Label>Name</Form.Label>
              <Field name="name" component={CustomTextInput} type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="MyFormMessage">
              <Form.Label>Message</Form.Label>
              <Field name="message" component={CustomTextInput} as="textarea" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="flat" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
