import React from 'react';
import styled from 'styled-components';
import BaseContainer from '../components/Container';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ExternalLink from '../components/ExternalLink';
import RaisingHand from '../assets/RaisingHand';
import './styles.css';

const MainContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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

export const test = () => (
  <BaseContainer>
    <Content>
      <Nav />
      <MainContainer>
        {/* <div className="svg-container"> */}
          {/* <RaisingHand /> */}
        {/* </div> */}
        <div>
          <Greeting>
            <Doodle />
            <h2>Hi!</h2>
          </Greeting>
          <div>
            <p>
              I'm Dan Hinze, a musician and web developer recently relocated to Minneapolis and currently at <ExternalLink href="https://bestbuy.com/">Best Buy</ExternalLink>.
              Before that, I was in Chicago, working at <ExternalLink href="https://sproutsocial.com/">Sprout Social</ExternalLink> and playing sax/writing music with <ExternalLink href="https://www.fayray.band/">Fay Ray</ExternalLink>.
              I'm always open to new opportunities and colloborations. Feel free to <ExternalLink href="mailto:dan.hinze.92@gmail.com">reach out.</ExternalLink>
            </p>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </Content>
  </BaseContainer>
);

const NewMain = styled.main`
  flex: 1 1 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export default () => (
  <Container>
    <Nav />
    <NewMain>
      <Greeting>
        <Doodle />
        <h2>Hi!</h2>
      </Greeting>
      <div>
        <p>
          I'm Dan Hinze, a musician and web developer recently relocated to Minneapolis and currently at <ExternalLink href="https://bestbuy.com/">Best Buy</ExternalLink>.
          Before that, I was in Chicago, working at <ExternalLink href="https://sproutsocial.com/">Sprout Social</ExternalLink> and playing sax/writing music with <ExternalLink href="https://www.fayray.band/">Fay Ray</ExternalLink>.
          I'm always open to new opportunities and collaborations. Feel free to <ExternalLink href="mailto:dan.hinze.92@gmail.com">reach out.</ExternalLink>
        </p>
      </div>
    </NewMain>
    <Footer />
  </Container>
);
