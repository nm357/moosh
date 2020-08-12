<template>
  <div>
    <div id="world">

      <div id="verticalSpace">

        <img src="../assets/greenshoes.png" alt="8-bit Greenshoes" sizes="" srcset="">

      </div>

      <div id="ground">
        <!-- <img src="../assets/moosh-brick.png" alt="Brick Tile" width="128px"> -->
        {{ ground }}
      </div>

      <div id="background">

      </div>
    </div>
  </div>
</template>

<script lang="tsx">
import WorldTile from './WorldTile';

const ground = () => {
  try {
    const cornerstone: WorldTile = new WorldTile(
      '../assets/moosh-brick.png', 'Brick Tile');
    // return new Array(Math.ceil(this.props.windowWidth / cornerstone.offsetWidth)).map((tile: HTMLElement) => tile = cornerstone.cloneNode());
    return new Array(Math.ceil(this.props.windowWidth / cornerstone.renderElement().offsetWidth)).map((tile) => {
      return Object.assign(tile, cornerstone);
    });
  } catch (error) {
    console.log('Error while building ground: ', error);
    return ['ground'];
  }
}

export default {
  name: 'MegaMooshLand',
  props: {
    windowHeight: Number,
    windowWidth: Number
  },
  data: function() {
    return {
      ground
    }
  }
};
</script>
