import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import BaseContainer from '../components/Container';
import ResumeItem from '../components/ResumeItem';
import Nav from '../components/Nav';

const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  width: 80%;
  min-width: 270px;
  max-width: 600px;
`;

const PlaceChunk = styled.span`
  display: inline-block;
`;

const UIUC = (
  <>
    <PlaceChunk>University of Illinois</PlaceChunk> <PlaceChunk>at Urbana-Champaign</PlaceChunk>
  </>
);

export default () => (
  <BaseContainer>
    <Helmet title="Resume" />
    {/* <Nav /> */}
    <ResumeContainer>
      <ResumeItem place="Best Buy" duration="December 2018 - Present">
        Front end development for Best Buy's main e-commerce website.
      </ResumeItem>
      <ResumeItem place="Sprout Social" duration="March 2017 - August 2018">
        I worked on the Reporting Squad for Sprout. Highlights include updating core reports to a
        more modern React+Redux architecture, adding description states for missing data scenarios,
        and updating an outdated React-Dates fork across the entire Sprout app.
      </ResumeItem>
      <ResumeItem place="Uptake" duration="July 2015 - February 2017">
        Starting out as a Solutions Engineer, I helped with feature refinements, market research,
        and writing scripts to pull/clean data. After learning web development on the side, I
        transitioned to the engineering side, working on a data mapping tool as part of Uptake's
        data pipeline management tooling.
      </ResumeItem>
      <ResumeItem place={UIUC} duration="Class of 2015">
        BS in Engineering Physics with minors in Computer Science, Math, and Music. The phenomenal
        CS program at UIUC opened up my interests into programming and helped reroute my goals
        post-school.
      </ResumeItem>
    </ResumeContainer>
  </BaseContainer>
);
