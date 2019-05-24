import React from 'react';

import './Landing.css';
import arrow_down from './arrow_down.png';

function Landing() {
  return (
    <div className="Landing">
      <header>
        <div className="Landing-hero">
          <h1>lorem</h1>
        </div>
      </header>
      <a href="#contact">
        <img
          className="animated infinite flash slower"
          src={arrow_down}
          alt="arrow down"
          id="Landing-scroll"
        />
      </a>
    </div>
  );
}

export default Landing;
