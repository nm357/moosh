import React from 'react';

import greenshoes from '../assets/greenshoes.png';
import greenshoesJumping from '../assets/greenshoes-jumping.png';
import brickTile from '../assets/moosh-brick.png';
import blockTile from '../assets/moosh-block.png';

export default class MegaMooshLand extends React.Component {
  constructor(props: any) {
    super(props);
  };

  buildGround() {
    return new Array(4).fill(<img className="brick block" src={brickTile} alt="Brick Tile"/>);
  };

  handleBoxClick(event: any) {
    event.preventDefault();
    console.log('click');
  }
  
  // TODO handle landscape device orientation
  render() {
    return (
      <section id="megaMooshLand">
        <div id="mooshBoxes">
          { box }
          <img 
            className="box block" 
            src={blockTile} 
            alt="Box Block"
            onClick={this.handleBoxClick}
          />
          { box }
        </div>
                
        <div>
          <img className="greenshoes" src={greenshoes} alt="GreenShoes"/>
          <img src={greenshoesJumping} alt="GreenShoes Jumping"/>
          <img className="greenshoes" src={greenshoes} alt="GreenShoes"/>
        </div>

        <div>
          { this.buildGround() }
        </div>
      </section>
    );
  };
};

const box = <img className="box block" src={blockTile} alt="Box Block"/>;
