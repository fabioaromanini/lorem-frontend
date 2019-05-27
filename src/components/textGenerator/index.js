import React from 'react';
import Container from 'react-bootstrap/Container';

import Options from './options';
import mockText from './mocktext';

import './TextGenerator.css';

function TextGenerator() {
  return (
    <Container id="TextGenerator">
      <h1 className="Section-title">Generate text</h1>
      <Options />
      <textarea id="TextGenerator-output" value={mockText} disabled />
    </Container>
  );
}

export default TextGenerator;
