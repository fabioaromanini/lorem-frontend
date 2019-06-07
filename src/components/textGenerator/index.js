import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Options from './options';
import mockText from './mocktext';

import './TextGenerator.css';

class TextGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      originalText: mockText,
      words: mockText.split(' '),
      buttonMessage: 'Copy to clipboard'
    };
  }

  modifyText = values => {
    let newText = '';
    const { quantity, unity } = values;

    if (unity === 'chars') {
      newText = this.state.originalText.substr(0, quantity);
    } else {
      const words = this.state.words.slice(0, quantity);
      newText = words.join(' ');
      if (newText.endsWith(',')) {
        newText = newText.substr(0, newText.length - 1);
        newText = `${newText}.`;
      }

      if (!newText.endsWith('.')) {
        newText = `${newText}.`;
      }
    }

    this.setState({ text: newText, buttonMessage: 'Copy to clipboard' });
  };

  copyToClipboard = () => {
    const output = document.getElementById('TextGenerator-output');
    output.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
    this.setState({ buttonMessage: 'Copied!' });
  };

  render() {
    return (
      <Container id="TextGenerator">
        <h1 className="Section-title">Generate text</h1>
        <Options onSubmit={this.modifyText} />
        <textarea readOnly id="TextGenerator-output" value={this.state.text} />
        <Button variant="flat-inverted" onClick={this.copyToClipboard}>
          {this.state.buttonMessage}
        </Button>
      </Container>
    );
  }
}

export default TextGenerator;
