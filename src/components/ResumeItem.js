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

const Description = styled.div`
  margin-top: 10px;
`;

export default function ({ place, duration, children }) {
  return (
    <ResumeItem>
      <ItemHeader>
        <h3>{place}</h3>
        <span>{duration}</span>
      </ItemHeader>
      <Description>{children}</Description>
    </ResumeItem>
  );
}