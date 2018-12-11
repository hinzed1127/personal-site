import React from 'react';
import BaseContainer from '../components/Container';
import ColorSlider from '../components/ColorSlider';
import DrawCanvas from '../components/DrawCanvas';

export default class Draw extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'hsl(0, 100%, 50%)',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;

    if (Number(value) === -1) {
      this.setState({ color: 'hsl(0, 100%, 100%)' });
    } else if (Number(value) === 361) {
      this.setState({ color: 'hsl(360, 100%, 0%)' });
    } else {
      this.setState({ color: `hsl(${value}, 100%, 50%)` });
    }
  }

  render() {
    return (
      <BaseContainer>
        <div>Test</div>
        <ColorSlider color={this.state.color} onChange={this.handleChange} />
        <DrawCanvas color={this.state.color} />
      </BaseContainer>
    );
  }
}
