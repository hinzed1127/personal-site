import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BaseContainer from '../components/Container';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ExternalLink from '../components/ExternalLink';
import RaisingHand from '../assets/raising-hand';
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
            I'm Dan Hinze, a musician and web developer freshly relocated to Minneapolis. Before
            that, I was in Chicago, working at{' '}
            <ExternalLink href="https://sproutsocial.com/">Sprout Social</ExternalLink> and playing
            sax/writing music with{' '}
            <ExternalLink href="https://www.fayray.band/">Fay Ray</ExternalLink>. I'm currently
            looking for my next gig. Check out my <Link to="/resume/">resume</Link> to see if I can
            help you out.
          </p>
        </div>
      </MainContainer>
      <Footer />
    </Content>
  </BaseContainer>
);
