import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import ExternalLink from '../components/ExternalLink';
import RaisingHand from '../assets/RaisingHand';
import './styles.css';

const Doodle = styled(RaisingHand)`
  max-width: 150px;
  width: auto;
  height: fit-content;
  display: inline-block;
`;

const Greeting = styled.div`
  display: flex;
  max-width: 200px;
  justify-content: space-around;
  align-items: center;
`;

const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export default () => (
  <>
    <Main>
      <Greeting>
        <Doodle />
        <h1>Hi!</h1>
      </Greeting>
      <div className="main-container">
        <p>
          I'm Dan Hinze, a musician and web developer recently relocated to Minneapolis via Chicago.
        </p>

        <ul>
          Currently:
          <li>
            Working on making <ExternalLink href="https://va.gov">va.gov</ExternalLink> better at{' '}
            <ExternalLink href="https://adhocteam.us/">Ad Hoc</ExternalLink>.
          </li>
          <li>Writing music for a new project.</li>
        </ul>
        <ul>
          Previously:
          <li>
            Developer at <ExternalLink href="https://bestbuy.com/">Best Buy</ExternalLink>,{' '}
            <ExternalLink href="https://sproutsocial.com/">Sprout Social</ExternalLink>,{' '}
            <ExternalLink href="https://www.uptake.com/">Uptake</ExternalLink>.
          </li>
          <li>
            Bandleader/saxophone in{' '}
            <ExternalLink href="https://www.fayray.band/">Fay Ray</ExternalLink>.
          </li>
        </ul>
        <p>
          I'm always open to new opportunities and collaborations. Feel free to{' '}
          <ExternalLink href="mailto:dan.hinze.92@gmail.com">reach out.</ExternalLink>
        </p>
      </div>
    </Main>
    <Footer />
  </>
);
