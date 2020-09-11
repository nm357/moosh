import React from 'react';

import githubLogo from '../assets/GitHub_Logo.png';
import linkedinLogo from '../assets/LI-Logo.png';

const githubUrl: string = 'https://www.github.com/nm357';
const linkedinUrl: string = 'https://www.linkedin.com/in/nicholasmikita';

export default class MooshMenu extends React.Component {
  render() {
    return(
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
  };
};