import React from 'react';

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

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div className="ContactForm" id="contact">
        <div className="ContactForm-header">
          <h1>contact</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="ContactForm-body">
            <label>
              email
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </label>
            <label>
              name
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
            <label>
              message
              <input
                type="text"
                value={this.state.message}
                onChange={this.handleMessageChange}
              />
            </label>
            <input
              type="submit"
              value="submit"
              className="ContactForm-button"
            />
          </div>
        </form>
        <div className="ContactForm-footer">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/fabioaromanini/lorem-landing-frontend"
          >
            <h3>github</h3>
          </a>
        </div>
      </div>
    );
  }
}

export default ContactForm;
