import React from 'react';

import '../styles/app.css';

import MegaMooshLand from './MegaMooshLand';

import githubLogo from '../assets/GitHub_Logo.png';
import linkedinLogo from '../assets/LI-Logo.png';

export default class App extends React.PureComponent {
  render() {
    return(
      <div id="app">
        <MegaMooshLand />
      
        { footerSection }
      </div>
    );
  };
};

const currentYear = new Date().getFullYear();

const footerSection = (
  <section id="footer">
    <button id="mooshButton">🖖 Moosh</button>
    Nicholas Mikita, { `${currentYear}` } 
    <a target="_blank" href="githubUrl">
      <img src={githubLogo} width="60px" />
    </a>
    <a target="_blank" href="linkedinUrl">
      <img src={linkedinLogo} width="60px" />
    </a>
  </section>
);
