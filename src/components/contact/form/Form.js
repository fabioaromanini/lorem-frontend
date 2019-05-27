import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { Field } from 'redux-form';

import CustomTextInput from '../../customTextInput';
import { notEmpty } from '../../customTextInput/validations';
import './Form.css';

export default props => {
  const { handleSubmit, submitting, submitSucceeded, submitFailed } = props;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6}>
            <Field
              name="email"
              label="Email"
              component={CustomTextInput}
              disabled={submitSucceeded}
              formName="Contact"
              type="text"
            />
          </Col>
          <Col xs={12} md={6}>
            <Field
              name="name"
              label="Name"
              disabled={submitSucceeded}
              component={CustomTextInput}
              formName="Contact"
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Field
              name="message"
              label="Message *"
              component={CustomTextInput}
              as="textarea"
              formName="Contact"
              disabled={submitSucceeded}
              validate={notEmpty}
            />
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
                Thank you!
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
              Form submitted.
            </div>
            <div
              className="Form-message"
              style={{ display: submitFailed ? 'inline' : 'none' }}
            >
              Submission failed, please try again.
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
