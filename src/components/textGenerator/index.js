import React from 'react';
import Container from 'react-bootstrap/Container';

import Options from './options';
import mockText from './mocktext';

import './TextGenerator.css';

class TextGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      originalText: mockText,
      words: mockText.split(' ')
    };
  }

  modifyText = values => {
    let newText = '';
    const { quantity, unity } = values;

    if (unity === 'chars') {
      if (this.state.originalText[quantity] === '.') {
        newText = this.state.originalText.substr(0, quantity);
      } else {
        newText = `${this.state.originalText.substr(0, quantity - 1)}.`;
      }
    } else {
      const words = this.state.words.slice(0, quantity);
      newText = words.join(' ');
    }

    if (newText.endsWith(',')) {
      newText = newText.substr(0, newText.length - 1);
      newText = `${newText}.`;
    }

    if (!newText.endsWith('.')) {
      newText = `${newText}.`;
    }

    this.setState({ text: newText });
  };

  render() {
    return (
      <Container id="TextGenerator">
        <h1 className="Section-title">Generate text</h1>
        <Options onSubmit={this.modifyText} />
        <textarea id="TextGenerator-output" value={this.state.text} disabled />
      </Container>
    );
  }
}

export default TextGenerator;
