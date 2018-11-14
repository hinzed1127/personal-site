import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import RaisingHand from '../assets/raising-hand';
import './styles.css';

const Container = styled.div`
  position: relative;
  margin: 10% auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const ContainerElement = styled.div`
//   flex-grow: 1;
//   min-width: 150px;
//   max-width: 300px;
// `;

export default () => (
  <Container>
    <div className="svg-container">
      <RaisingHand />
    </div>
    <div className="greeting">
      <h2>Hi!</h2>
      <p>
        I'm Dan Hinze, a musician and web developer freshly relocated to
        Minneapolis. Before that, I was in Chicago, working at{' '}
        <a
          href="https://sproutsocial.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sprout Social
        </a>{' '}
        K and playing sax/writing music with{' '}
        <a
          href="https://www.fayray.band/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fay Ray
        </a>
        . I'm currently looking for my next gig. Check out my{' '}
        <Link to="/resume/">resume</Link> to see if I can help you out.
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
        <Link to="/testing">testing</Link>
      </p>
    </div>
  </Container>
);
