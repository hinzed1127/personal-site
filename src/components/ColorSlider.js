import React from 'react';
import styled from 'styled-components';

const ColorSlider = styled.input`
  z-index: 2;
  position: relative;
  appearance: none;
  /* width: 80%; */
  width: 100%;
  height: 25px;
  border: 2px solid black;
  border-radius: 20px;
  outline: none;
  background: linear-gradient(
    to right,
    #fff 0%,
    #fff 1%,
    #f00 1%,
    #ff0,
    #0f0,
    #0ff,
    #00f,
    #f0f,
    #f00 99%,
    #000 99%,
    #000 100%
  );
  color: inherit;

  &::-webkit-slider-thumb {
    appearance: none;
    background-color: ${props => props.color};
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px ${props => (props.value === -1 ? '#000' : props.color)},
      inset 0 0 0 2px #fff;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    margin: 0 -3px;
  }
`;

export default function Slider(props) {
  return (
    <ColorSlider
      className={props.className}
      type="range"
      min={-1}
      max={361}
      value={Number(props.value)}
      color={props.color}
      onChange={props.onChange}
    />
  );
}
