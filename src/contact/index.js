import React from 'react';

import Form from './Form';
import './Contact.css';

export default () => {
  return (
    <div className="Contact" id="contact">
      <h1>Contact</h1>
      <Form />
      <footer className="Contact-footer">
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
};
