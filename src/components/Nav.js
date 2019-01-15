import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 5% 20px;
  width: 100%;

  @media (max-width: 350px) {
    margin: 5%;
  }
`;

const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 0 10px;
  color: black;


  &:hover {
    text-decoration: underline;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <div>
        <NavLink to="/">
          <h2>Dan Hinze</h2>
        </NavLink>
      </div>

      <div>
        <NavLink to="/words">Words</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </NavContainer>
  );
}
