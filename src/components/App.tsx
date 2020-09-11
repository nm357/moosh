import React from 'react';

import '../styles/app.css';

import MegaMooshLand from './MegaMooshLand';
import MooshTime from './MooshTime';
import MooshMenu from './MooshMenu';

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
        { this.state.displayMooshMenu ? <MooshMenu /> : '' }
        { this.makeMooshBar() }
      </div>
    );
  };

  makeMooshBar() {
    return (
      <section id="mooshBar">
        <button id="mooshButton" onClick={this.handleClickMooshButton}>🖖 Moosh</button>
  
        <MooshTime />
      </section>
    )
  };

  handleClickMooshButton(event: any) {
    event.preventDefault();
    const updatedValue = !this.state.displayMooshMenu
    this.setState({ displayMooshMenu: updatedValue });
  };
};

