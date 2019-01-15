import React from 'react';
import styled from 'styled-components';

const ResumeItem = styled.div`
  grid-column: 1 / span 12;
  padding: 20px 0;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Place = styled.h3`
  margin-right: 5px;
  @media (max-width: 630px) {
      max-width: 250px;
      font-size: 16px;
  }
`;

const Duration = styled.span`
  min-width: 85px;
  @media (max-width: 630px) {
      font-size: 14px;
  }
`;

const Description = styled.div`
  margin-top: 10px;
  @media (max-width: 630px) {
      font-size: 14px;
  }
`;

export default function ({ place, duration, children }) {
  return (
    <ResumeItem>
      <ItemHeader>
        <Place>{place}</Place>
        <Duration>{duration}</Duration>
      </ItemHeader>
      <Description>{children}</Description>
    </ResumeItem>
  );
}
