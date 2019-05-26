import React from 'react';

import Form from './form';
import Footer from './footer';
import './Contact.css';

export default () => {
  return (
    <div className="Contact" id="contact">
      <h1>Contact</h1>
      <Form />
      <Footer />
    </div>
  );
};
