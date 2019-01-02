import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: black;
  text-decoration: none;
  border-bottom: 2px solid black;

  &:hover {
    color: blue;
    border-bottom: 2px solid blue;
  }
`;

export default props => (
  <Link href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </Link>
);
