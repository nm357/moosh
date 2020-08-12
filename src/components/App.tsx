import React from 'react';

export default class App extends React.PureComponent {
  private currentYear: number = new Date().getFullYear();

  render() {
    return(
      <div>
        <h1>Welcome to Mega Moosh Land! 🖖</h1>
       
        <section id="links">
          <div><a href="/art">Art</a></div>
          <div><a href="/philosophy">Philosophy</a></div>
          <div><a href="/language">Language</a></div>
          <div><a href="/software">Software</a></div>
        </section>
      
      <div id="footer">
        Nicholas Mikita, { `${this.currentYear}` } 
        <a target="_blank" href="githubUrl">
          <img src="./assets/GitHub_Logo.png" width="60px" />
        </a>
        <a target="_blank" href="linkedinUrl">
          <img src="./assets/LI-Logo.png" width="60px" />
        </a>
      </div>
    </div>
    )
  }
};