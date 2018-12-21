import React from 'react';
import styled from 'styled-components';
import ColorSlider from '../components/ColorSlider';
import DrawCanvas from '../components/DrawCanvas';

const FullScreenCanvas = styled(DrawCanvas)`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
export default class Draw extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'hsl(180, 100%, 50%)',
      value: 180,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    const sliderValue = Number(value);

    if (sliderValue === -1) {
      this.setState({ value, color: 'hsl(0, 100%, 100%)' });
    } else if (sliderValue === 361) {
      this.setState({ value, color: 'hsl(360, 100%, 0%)' });
    } else {
      this.setState({ value, color: `hsl(${value}, 100%, 50%)` });
    }
  }

  render() {
    return (
      <>
        <ColorSlider
          color={this.state.color}
          onChange={this.handleChange}
          value={this.state.value}
        />
        <FullScreenCanvas color={this.state.color} />
      </>
    );
  }
}
