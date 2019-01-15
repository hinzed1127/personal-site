import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import favicon16 from '../assets/favicon-16x16.png';
import favicon32 from '../assets/favicon-32x32.png';
import favicon96 from '../assets/favicon-96x96.png';
import favicon128 from '../assets/favicon-128.png';
import favicon196 from '../assets/favicon-196x196.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 650px;
  margin: 0 auto;
  padding: 0 10px;
`;

export default ({ children }) => (
  <Container>
    <Helmet titleTemplate="%s | Dan Hinze" defaultTitle="Dan Hinze">
      <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
      <link rel="icon" type="image/png" href={favicon32} sizes="32x32" />
      <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
      <link rel="icon" type="image/png" href={favicon128} sizes="128x128" />
      <link rel="icon" type="image/png" href={favicon196} sizes="196x196" />

      <meta property="og:site_name" content="Dan Hinze" />
      <meta property="og:locale" content="en_US" />
    </Helmet>

    {children}
  </Container>
);
