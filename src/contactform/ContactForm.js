import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import './ContactForm.css';

class ContactForm extends React.Component {
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

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div className="ContactForm" id="contact">
        <h1>Contact</h1>
        <Container>
          <Form>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group
                  controlId="ContactFormEmail"
                  onSubmit={this.handleSubmit}
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="ContactFormName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="ContactFormMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={this.state.message}
                    onChange={this.handleChange('message')}
                    className="custom-input"
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
        <footer className="ContactForm-footer">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/fabioaromanini/lorem-landing-frontend"
          >
            <p>github</p>
          </a>
        </footer>
      </div>
    );
  }
}

export default ContactForm;
