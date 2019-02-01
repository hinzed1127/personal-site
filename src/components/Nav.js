import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Cube from './Cube';

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

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 630px) {
      font-size: 18px;
      line-height: 20px;
  }
`;

const NameHeader = styled.h1`
  font-size: 26px;
  font-weight: bold;

  @media (max-width: 630px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

const CubeWrapper = styled(Cube)`
  margin-left: 2px;
  @media (min-width: 500px) {
    margin-left: 5px;
  }
`;

const windowGlobal = typeof window !== 'undefined';
const isMobile = (windowGlobal) ? /(Android|iOS|iPhone|iPod|iPad)/i.test(window.navigator.userAgent) : false;

const HomeHeader = styled.div`
  display: flex;
  width: fit-content;
`;

export default function Nav() {
  return (
    <NavContainer>
      <HomeHeader>
        <NavLink to="/">
          <NameHeader>Dan Hinze</NameHeader>
        </NavLink>
        <CubeWrapper edgeLength={isMobile ? '20px' : '25px'} />
      </HomeHeader>

      <div css="display: flex;">
        <NavLink to="/words">Words</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </NavContainer>
  );
}
