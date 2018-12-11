import React from 'react';
// import styled from 'styled-components';
// import { createContext } from 'vm';

export default class DrawCanvas extends React.Component {
  constructor() {
    super();
    this.state = {
      isDrawing: false,
      mouseDown: false,
      lastX: 0,
      lastY: 0,
    };

    this.draw = this.draw.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.border = '1px solid #000';

    this.ctx.strokeStyle = 'hsl(0, 100%, 50%)';
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.lineWidth = 10;
    this.ctx.globalCompositeOperation = 'source-over';
  }

  componentWillUpdate() {
    this.ctx.strokeStyle = this.props.color;
  }

  draw(e) {
    if (!this.state.isDrawing) return;
    // console.log('drawing', this.state);

    // this.ctx.save();
    this.ctx.beginPath();
    this.ctx.moveTo(this.state.lastX, this.state.lastY);
    this.ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    this.ctx.stroke();
    // this.ctx.restore();

    this.setState({
      lastX: e.nativeEvent.offsetX,
      lastY: e.nativeEvent.offsetY,
    });
  }

  handleMouseDown(e) {
    this.setState({
      isDrawing: true,
      mouseDown: true,
      lastX: e.nativeEvent.offsetX,
      lastY: e.nativeEvent.offsetY,
    });
  }

  handleMouseUp() {
    this.setState({ isDrawing: false, mouseDown: false });
  }

  handleMouseOut() {
    console.log('mouse out');
    this.setState({ isDrawing: false });
  }

  handleMouseOver(e) {
    return;
    e.persist();
    console.log(e.nativeEvent);
    this.setState(prevState => ({
      isDrawing: prevState.mouseDown,
      lastX: e.nativeEvent.offsetX,
      lastY: e.nativeEvent.offsetY,
    }));
  }

  render() {
    return (
      <canvas
        onBlur={() => {}}
        ref={canvas => {
          this.canvas = canvas;
        }}
        onMouseMove={this.draw}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseOut={this.handleMouseOut}
        onMouseEnter={this.handleMouseOver}
      />
    );
  }
}
