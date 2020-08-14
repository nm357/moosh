import React from 'react';

import '../styles/app.css';

import MegaMooshLand from './MegaMooshLand';

import githubLogo from '../assets/GitHub_Logo.png';
import linkedinLogo from '../assets/LI-Logo.png';

const githubUrl = 'https://www.github.com/nm357';
const linkedinUrl = 'https://www.linkedin.com/in/nicholasmikita';

const mooshMenu = (
  <div id="mooshMenu">
    <a target="_blank" href={githubUrl}>
      <img src={githubLogo} width="60px" />
    </a>
    <a target="_blank" href={linkedinUrl}>
      <img src={linkedinLogo} width="60px" />
    </a>
    <span>Nicholas Mikita, { `${new Date().getFullYear()}` }</span>
  </div>
  );

export default class App extends React.PureComponent {
  state: { [prop: string]: any };

  constructor(props: any) {
    super(props);

    this.state = {
      displayMooshMenu: false
    }

    this.makeMooshBar = this.makeMooshBar.bind(this);
    this.handleClickMooshButton = this.handleClickMooshButton.bind(this);
  }
  render() {
    return(
      <div id="app">
        <MegaMooshLand />
        { this.state.displayMooshMenu ? mooshMenu : '' }
        { this.makeMooshBar(new Date()) }
      </div>
    );
  };

  makeMooshBar(mooshDate: Date) {
    //TODO ClockTime component with live updating time
    return (
      <section id="mooshBar">
        <button id="mooshButton" onClick={this.handleClickMooshButton}>🖖 Moosh</button>
  
        <div id="mooshDateTime">
          { `${mooshDate.toLocaleDateString()} ${mooshDate.toLocaleTimeString()}` }
        </div>
      </section>
    )
  };

  handleClickMooshButton(event: any) {
    event.preventDefault();
    const updatedValue = !this.state.displayMooshMenu
    this.setState({ displayMooshMenu: updatedValue });
  };
};

