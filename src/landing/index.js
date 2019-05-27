import React from 'react';

import './Landing.css';
import arrow_down from './arrow_down.png';

export default function Landing() {
  return (
    <div id="Landing" className="Landing">
      <header>
        <div className="Landing-hero">
          <h1 id="Landing-hero-title">lorem</h1>
          <p id="Landing-hero-subtitle">
            Your favourite webapp for random text generation.
          </p>
        </div>
      </header>
      <ul style={{ maxWidth: '60vw' }}>
        <li>Choose between the maximum lenght in words or characters.</li>
      </ul>
      <a href="#TextGenerator">
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
