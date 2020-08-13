import React from 'react';

import MegaMooshLand from './MegaMooshLand';

import githubLogo from '../assets/GitHub_Logo.png';
import linkedinLogo from '../assets/LI-Logo.png';

export default class App extends React.PureComponent {
  private currentYear: number = new Date().getFullYear();

  private footerSection = (
    <section id="footer">
      Nicholas Mikita, { `${this.currentYear}` } 
      <a target="_blank" href="githubUrl">
        <img src={githubLogo} width="60px" />
      </a>
      <a target="_blank" href="linkedinUrl">
        <img src={linkedinLogo} width="60px" />
      </a>
    </section>
  );

  private linksSection = (
    <section id="links">
      <div><a href="/art">Art</a></div>
      <div><a href="/philosophy">Philosophy</a></div>
      <div><a href="/language">Language</a></div>
      <div><a href="/software">Software</a></div>
    </section>
  );

  render() {
    return(
      <div>
        { this.linksSection }

        <MegaMooshLand />
      
        { this.footerSection }
    </div>
    );
  };
};
