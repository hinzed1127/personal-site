import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BaseContainer from '../components/Container';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ExternalLink from '../components/ExternalLink';
import RaisingHand from '../assets/RaisingHand';
import './styles.css';

const MainContainer = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ResumeLink = styled(Link)`
  color: black;
`;

export default () => (
  <BaseContainer>
    <Content>
      <Nav />
      <MainContainer>
        <div className="svg-container">
          <RaisingHand />
        </div>
        <div className="greeting">
          <h2>Hi!</h2>
          <p>
            I'm Dan Hinze, a musician and web developer recently relocated to Minneapolis and currently at <ExternalLink href="https://bestbuy.com/">Best Buy</ExternalLink>.
            Before that, I was in Chicago, working at <ExternalLink href="https://sproutsocial.com/">Sprout Social</ExternalLink> and playing sax/writing music with <ExternalLink href="https://www.fayray.band/">Fay Ray</ExternalLink>.
            I'm always open to new opportunities and collaborations. Feel free to <ExternalLink href="mailto:dan.hinze.92@gmail.com">reach out.</ExternalLink>
          </p>
        </div>
      </MainContainer>
      <Footer />
    </Content>
  </BaseContainer>
);
