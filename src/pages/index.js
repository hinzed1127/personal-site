import React from 'react';
import styled from 'styled-components';
import BaseContainer from '../components/Container';
import Nav from '../components/Nav';
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
  <BaseContainer>
    {/* <Nav /> */}
    <Main>
      <Greeting>
        <Doodle />
        <h1>Hi!</h1>
      </Greeting>
      <div css="margin-top: 30px; padding: 5px;">
        <p>
          I'm Dan Hinze, a musician and web developer recently relocated to Minneapolis and currently at <ExternalLink href="https://bestbuy.com/">Best Buy</ExternalLink>.
          Before that, I was in Chicago, working at <ExternalLink href="https://sproutsocial.com/">Sprout Social</ExternalLink> and playing sax/writing music with <ExternalLink href="https://www.fayray.band/">Fay Ray</ExternalLink>.
          I'm always open to new opportunities and collaborations. Feel free to <ExternalLink href="mailto:dan.hinze.92@gmail.com">reach out.</ExternalLink>
        </p>
      </div>
    </Main>
    <Footer />
  </BaseContainer>
);
