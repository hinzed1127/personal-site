import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 5% 20px;
`;

const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 0 15px;
  &:hover {
    text-decoration: underline;
  }
`;

const NavLeft = styled.div``;

const NavRight = styled.div``;
export default function Nav() {
  return (
    <NavContainer>
      <NavLeft>
        <NavLink to="/">
          <h2>Dan Hinze</h2>
        </NavLink>
      </NavLeft>

      <NavRight>
        <NavLink to="/words">Words</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </NavRight>
    </NavContainer>
  );
}
