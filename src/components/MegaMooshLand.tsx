import React from 'react';

import greenshoes from '../assets/greenshoes.png';
import greenshoesJumping from '../assets/greenshoes-jumping.png';
import brickTile from '../assets/moosh-brick.png';
import blockTile from '../assets/moosh-block.png';

export default class MegaMooshLand extends React.Component {
  constructor(props: any) {
    super(props);
  };

  private box = <img className="box block" src={blockTile} alt="Box Block"/>;
  private brick = <img className="brick block" src={brickTile} alt="Brick Tile"/>;

  buildGround() {
    return new Array(4).fill(this.brick);
  };
  
  render() {
    return (
      <section id="megaMooshLand">
        <div id="mooshBoxes">
          { this.box }
          { this.box }
          { this.box }
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
