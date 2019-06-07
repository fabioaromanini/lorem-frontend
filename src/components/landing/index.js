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
            Your favourite webapp for lorem text generation.
          </p>
        </div>
      </header>
      <div id="Landing-info">
        <ul>
          <li>Choose between the maximum lenght in words or characters.</li>
        </ul>
        <ul>
          <li>Get the text via email or simply copy it to your clipboard.</li>
        </ul>
      </div>
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
