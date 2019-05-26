import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Field } from 'redux-form';

import CustomTextInput from './customTextInput';
import './Form.css';

export default props => {
  const { handleSubmit, submitting, submitSucceeded } = props;
  console.log(props);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
          <Col xs={12}>
            <Button
              variant="flat"
              disabled={submitting || submitSucceeded}
              type="submit"
            >
              Submit
            </Button>
            <div
              id="Form-success-message"
              style={{ display: submitSucceeded ? 'inline-block' : 'none' }}
            >
              <p>Thanks for the feedback!</p>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
