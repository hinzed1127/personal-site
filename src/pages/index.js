import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ExternalLink from '../components/ExternalLink';
import RaisingHand from '../assets/raising-hand';
import './styles.css';

const MainContainer = styled.main`
  position: relative;
  margin: 10% auto;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <div>
    <Nav />
    <MainContainer>
      <div className="svg-container">
        <RaisingHand />
      </div>
      <div className="greeting">
        <h2>Hi!</h2>
        <p>
          I'm Dan Hinze, a musician and web developer freshly relocated to Minneapolis. Before that,
          I was in Chicago, working at{' '}
          <ExternalLink href="https://sproutsocial.com/">Sprout Social</ExternalLink> and playing
          sax/writing music with{' '}
          <ExternalLink href="https://www.fayray.band/">Fay Ray</ExternalLink>. I'm currently
          looking for my next gig. Check out my <Link to="/resume/">resume</Link> to see if I can
          help you out.
        </p>
        <p>
          I'm{' '}
          <a
            href="https://github.com/hinzed1127/personal-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            actively building out this site
          </a>
          , but in the meantime, feel free to{' '}
          <a href="mailto:dan.hinze.92@gmail.com">drop me a line</a>.
        </p>
      </div>
    </MainContainer>
    <Footer />
  </div>
);
