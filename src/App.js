import React from 'react';

import Landing from './landing';
import Contact from './contact';
import TextGenerator from './textGenerator';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Landing />
      <TextGenerator />
      <Contact />
    </React.Fragment>
  );
}

export default App;
