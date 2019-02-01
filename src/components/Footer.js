import React from 'react';
import styled from 'styled-components';
import ExternalLink from './ExternalLink';
import Github from '../assets/Github';
import Instagram from '../assets/Instagram';
import Twitter from '../assets/Twitter';
import Mail from '../assets/Mail';

const Footer = styled.footer`
  position: relative;
  margin: 15px auto;
`;

const Content = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const IconLink = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0 5px;
  :hover {
    transform: scale(1.3);
  }
`;
export default () => (
  <Footer>
    <Content>
      <IconLink title="Github Profile" href="https://github.com/hinzed1127" target="_blank" rel="noopener noreferrer">
        <Github />
      </IconLink>
      <IconLink title="Instagram Profile" href="https://instagram.com/dan.hinze" target="_blank" rel="noopener noreferrer">
        <Instagram />
      </IconLink>
      <IconLink title="Twitter Profile" href="https://twitter.com/dan_hinze" target="_blank" rel="noopener noreferrer">
        <Twitter />
      </IconLink>
      <IconLink title="Send me an email" href="mailto:dan.hinze.92@gmail.com" target="_blank" rel="noopener noreferrer">
        <Mail />
      </IconLink>
    </Content>
  </Footer>
);
