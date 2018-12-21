import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Pencil from '../assets/Pencil';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 5% 20px;
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

const PencilWrapper = styled.span`
  position: relative;
  top: 3px;
  margin: 0 10px;
  background: ${props => (props.isdrawing ? 'red' : '#fff')};
`;

export default function Nav({ isDrawing, toggleDraw, children }) {
  console.log(typeof isDrawing, isDrawing);

  return (
    <NavContainer>
      <div>
        <NavLink to="/">
          <h2>Dan Hinze</h2>
        </NavLink>
      </div>
      {children}
      <div>
        <PencilWrapper isdrawing={isDrawing} onClick={toggleDraw}>
          <Pencil />
        </PencilWrapper>
        {!isDrawing
          && <>
            <NavLink to="/words">Words</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </>
        }
      </div>
    </NavContainer>
  );
}
