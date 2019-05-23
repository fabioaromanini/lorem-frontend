import React from 'react';

import './Landing.css';
import arrow_down from './arrow_down.png';

function Landing() {
  return (
    <header className="Landing-header">
      <div className="Landing-hero">lorem.</div>
      <a href="#contact">
        <img
          className="animated infinite flash slower"
          src={arrow_down}
          alt="arrow down"
          id="Landing-scroll"
        />
      </a>
    </header>
  );
}

export default Landing;
