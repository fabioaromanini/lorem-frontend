import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './Form.css';

const myForm = props => {
  const handleChange = key => event => {
    console.log(props);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, name, message } = props;

    try {
      const response = await props.onSubmitForm({ email, name, message });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="MyFormEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={props.email}
                onChange={handleChange('email')}
                className="Form-input"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="MyFormName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={props.name}
                onChange={handleChange('name')}
                className="Form-input"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="MyFormMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                value={props.message}
                onChange={handleChange('message')}
                className="Form-input"
              />
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
