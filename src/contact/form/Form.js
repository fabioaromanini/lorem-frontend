import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { Field } from 'redux-form';

import CustomTextInput from './customTextInput';
import './Form.css';

export default props => {
  const { handleSubmit, submitting, submitSucceeded, submitFailed } = props;

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
          <Col xs>
            <Button
              variant="flat"
              disabled={submitting || submitSucceeded}
              type="submit"
            >
              <div
                style={{
                  display: !submitting && !submitSucceeded ? 'inline' : 'none'
                }}
              >
                Submit
              </div>
              <div style={{ display: submitSucceeded ? 'inline' : 'none' }}>
                Submitted
              </div>
              <Spinner
                style={{ display: submitting ? 'inherit' : 'none' }}
                size="sm"
                animation="border"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Button>
            <div
              className="Form-message"
              style={{ display: submitSucceeded ? 'inline' : 'none' }}
            >
              Thank you for the cooperation!
            </div>
            <div
              className="Form-message"
              style={{ display: submitFailed ? 'inline' : 'none' }}
            >
              Submission Failed. Please try again.
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
