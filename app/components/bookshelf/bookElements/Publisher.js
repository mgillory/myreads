// @flow
import * as React from 'react';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

const Publisher = ({ publisher }?: string) => (
  <BookPublisherContainer>
    {`Publisher: ${publisher}` || 'Publisher not found'}
  </BookPublisherContainer>
);

const BookPublisherContainer = styled.span`
  font-size: 12px;

  @media only screen and (min-width: 375px) {
    font-size: 14px;
    padding: 3px 0;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 14px;
    padding: 5px 0;
  }
`;

export default onlyUpdateForKeys(['publisher'])(Publisher);