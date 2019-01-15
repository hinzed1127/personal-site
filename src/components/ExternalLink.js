import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: blue;
  text-decoration: none;
  border-bottom: 2px solid blue;

  &:hover {
    color: #008;;
    border-bottom: 2px solid #008;;
  }
`;

export default props => (
  <Link href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </Link>
);
