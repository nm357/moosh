import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/mark.css';

export default class Mark extends React.Component {
  constructor(props: {}) {
    super(props)

    this.initCanvas = this.initCanvas.bind(this);
  };

  initCanvas(canvasContext: CanvasRenderingContext2D) {
    canvasContext.canvas.width = canvasContext.canvas.clientWidth;
    canvasContext.canvas.height = canvasContext.canvas.clientHeight;
    canvasContext.fillRect(0, 0, 32, 32);
    canvasContext.strokeStyle = ''
    canvasContext.strokeRect(32, 0, 32, 31);
    canvasContext.fillStyle = '#8d1d0b';
    canvasContext.fillRect(64, 0, 32, 32);

  }

  componentDidMount() {
    return(this.initCanvas(ReactDOM.findDOMNode(this.refs.mark)?.getContext('2d')));
  }

  render() {
    return(
      <canvas ref="mark"></canvas>
    );
  };
}