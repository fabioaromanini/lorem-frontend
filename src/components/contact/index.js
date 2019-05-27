import React from 'react';

import Form from './form';
import Footer from './footer';
import './Contact.css';

export default () => {
  return (
    <div className="Contact" id="Contact">
      <h1 className="Section-title">Contact</h1>
      <Form />
      <Footer />
    </div>
  );
};
