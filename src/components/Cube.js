import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../utils/theme';

const rotate = keyframes`
  50% {
    transform: rotateY(90deg) rotateX(90deg) scale3d(.5, .5, .5);
  }

  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
`;

const rotate2 = keyframes`
  to {
    transform: rotate3d(1, 1, 1, 1turn) rotate3d(1, -1, 1, 1turn);
  }
`;

const Container = styled.div`
  width: ${props => props.edgeLength};
  height: ${props => props.edgeLength};
  perspective: 600px;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  /* animation: ${rotate} 2s ease-in-out infinite; */
  animation: ${rotate2} 90s linear infinite;

`;

const CubeFace = styled.div`
  position: absolute;
  width: ${props => props.edgeLength};
  height: ${props => props.edgeLength};
  opacity: 0.5;
`;

const Front = styled(CubeFace)`
  transform: rotateY(0deg) translateZ(calc(${props => props.edgeLength} / 2));
  background: ${colors.red};
`;

const Back = styled(CubeFace)`
  transform: rotateY(180deg) translateZ(calc(${props => props.edgeLength} / 2));
  background: ${colors.yellow};
`;

const Right = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(calc(${props => props.edgeLength} / 2));
  background: ${colors.teal};
`;

const Left = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(calc(${props => props.edgeLength} / 2));
  background: ${colors.green};
`;

const Top = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(calc(${props => props.edgeLength} / 2));
  background: ${colors.pink};
`;

const Bottom = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(calc(${props => props.edgeLength} / 2));
  background: ${colors.darkBlue};
`;

export default props => (
  <Container {...props}>
    <Cube>
      <Front {...props} />
      <Back {...props} />
      <Right {...props} />
      <Left {...props} />
      <Top {...props} />
      <Bottom {...props} />
    </Cube>
  </Container>
);
