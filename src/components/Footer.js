import React from 'react';
import styled from 'styled-components';
import ExternalLink from './ExternalLink';
import Github from '../assets/github';
import Instagram from '../assets/instagram';
import Twitter from '../assets/twitter';
import Mail from '../assets/mail';

const Footer = styled.footer`
  position: relative;
  bottom: 10px;
`;

const Content = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Icon = styled.span`
  padding: 0 5px;
`;
export default () => (
  <Footer>
    <Content>
      <ExternalLink href="https://github.com/hinzed1127">
        <Icon>
          <Github />
        </Icon>
      </ExternalLink>
      <ExternalLink href="https://instagram.com/dan.hinze">
        <Icon>
          <Instagram />
        </Icon>
      </ExternalLink>
      <ExternalLink href="https://twitter.com/dan_hinze">
        <Icon>
          <Twitter />
        </Icon>
      </ExternalLink>
      <a href="mailto:dan.hinze.92@gmail.com">
        <Icon>
          <Mail />
        </Icon>
      </a>
    </Content>
  </Footer>
);
