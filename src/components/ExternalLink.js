import React from 'react';
import styled from 'styled-components';

// TODO refactor color palette more for this to work
// import { colors } from '../utils/theme';

const Link = styled.a`
  color: #2a6c88;
  color: #21546a;
  text-decoration: none;
  border-bottom: 2px solid #2a6c88;
  border-bottom: 2px solid #21546a;

  &:hover {
    color: #034263;
    color: #034263;
    border-bottom: 2px solid #034263;
    border-bottom: 2px solid #034263;
  }
`;

export default props => (
  <Link href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </Link>
);
