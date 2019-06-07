import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Field } from 'redux-form';

import CustomTextInput from '../../customTextInput';
import CustomSelectInput from '../../customSelectInput';
import {
  notEmpty,
  greaterThanZero,
  max473
} from '../../customTextInput/validations';

export default props => {
  const { handleSubmit, submitting, unity } = props;

  const quantityValidations = [notEmpty, greaterThanZero];
  if (unity === 'words') {
    quantityValidations.push(max473);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Col xs={4}>
          <Field
            name="quantity"
            label="Quantity"
            component={CustomTextInput}
            type="number"
            inverted
            formName="TextGeneratorOptions"
            hideLabel
            validate={quantityValidations}
          />
        </Col>
        <Col xs={4}>
          <Field
            pristine
            name="unity"
            label="Unity"
            component={CustomSelectInput}
            inverted
            type="select"
            formName="TextGeneratorOptions"
            options={['words', 'chars']}
            hideLabel
          />
        </Col>
        <Col xs={4}>
          <Button variant="flat-inverted" type="submit">
            <div
              style={{
                display: !submitting ? 'inline' : 'none'
              }}
            >
              Generate
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
        </Col>
      </Row>
    </Form>
  );
};
