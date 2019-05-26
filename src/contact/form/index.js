import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './Form.css';

// TODO: Use redux-form
import axios from 'axios';
const { REACT_APP_BACKEND_URL } = process.env;
const gambiara = data => axios.post(`${REACT_APP_BACKEND_URL}/email`, data);
// END OF WORKAROUNDS

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: ''
    };
  }

  handleChange = key => event => {
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await gambiara(this.state);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="MyFormEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  className="Form-input"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="MyFormName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange('name')}
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
                  value={this.state.message}
                  onChange={this.handleChange('message')}
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
  }
}

export default MyForm;
