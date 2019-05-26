import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { Field } from 'redux-form';
import CustomField from './CustomField';

import './Form.css';

const myForm = props => {
  return (
    <Container>
      <Form onSubmit={props.handleSubmit}>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="MyFormEmail">
              <Form.Label>Email</Form.Label>
              <Field name="email" component={CustomField} type="email" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="MyFormName">
              <Form.Label>Name</Form.Label>
              <Field name="name" component={CustomField} type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="MyFormMessage">
              <Form.Label>Message</Form.Label>
              <Field component={CustomField} name="message" as="textarea" />
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

export default myForm;
