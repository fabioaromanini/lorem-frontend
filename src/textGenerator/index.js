import React from 'react';

import mockText from './mocktext';

import './TextGenerator.css';

function TextGenerator() {
  return (
    <div id="TextGenerator" className="TextGenerator">
      <h1 className="Section-title">Generate text</h1>
      <textarea id="TextGenerator-output" disabled value={mockText} />
    </div>
  );
}

export default TextGenerator;
