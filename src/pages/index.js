import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import BaseContainer from '../components/Container';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ExternalLink from '../components/ExternalLink';
import ColorSlider from '../components/ColorSlider';
import DrawCanvas from '../components/DrawCanvas';

import RaisingHand from '../assets/RaisingHand';
import './styles.css';

const MainContainer = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  /* user-select: none; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ResumeLink = styled(Link)`
  color: black;
`;

<<<<<<< HEAD
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
            I'm always open to new opportunities and colloborations. Feel free to <ExternalLink href="mailto:dan.hinze.92@gmail.com">reach out.</ExternalLink>
          </p>
        </div>
      </MainContainer>
      <Footer />
    </Content>
  </BaseContainer>
);
=======
const FullScreenCanvas = styled(DrawCanvas)`
  z-index: 1;
`;

const SliderContainer = styled(ColorSlider)`
  width: 50%;
  margin: 0 auto;
`;

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'hsl(180, 100%, 50%)',
      value: 180,
      isDrawing: false,
    };
  }

  toggleDraw = () => {
    console.log('here');

    this.setState(state => ({ isDrawing: !state.isDrawing }));
  };

  handleChange = e => {
    const { value } = e.target;
    const sliderValue = Number(value);

    if (sliderValue === -1) {
      this.setState({ value, color: 'hsl(0, 100%, 100%)' });
    } else if (sliderValue === 361) {
      this.setState({ value, color: 'hsl(360, 100%, 0%)' });
    } else {
      this.setState({ value, color: `hsl(${value}, 100%, 50%)` });
    }
  };

  render() {
    return (
      <BaseContainer>
        <Nav isDrawing={this.state.isDrawing} toggleDraw={this.toggleDraw}>
          <SliderContainer
            color={this.state.color}
            onChange={this.handleChange}
            value={this.state.value}
          />{' '}
        </Nav>
        <Content>
          {this.state.isDrawing && <FullScreenCanvas color={this.state.color} />}
          <MainContainer>
            <div className="svg-container">
              <RaisingHand />
            </div>
            <div className="greeting">
              <h2>Hi!</h2>
              <p>
                I'm Dan Hinze, a musician and web developer freshly relocated to Minneapolis. Before
                that, I was in Chicago, working at{' '}
                <ExternalLink href="https://sproutsocial.com/">Sprout Social</ExternalLink> and
                playing sax/writing music with{' '}
                <ExternalLink href="https://www.fayray.band/">Fay Ray</ExternalLink>. I'm currently
                looking for my next gig. Check out my <ResumeLink to="/resume/">resume</ResumeLink>{' '}
                to see if I can help you out.
              </p>
            </div>
          </MainContainer>
          <Footer />
        </Content>
      </BaseContainer>
    );
  }
}
>>>>>>> WIP building snapchat lookalike
