// @flow
import * as React from 'react';
import styled from 'styled-components';

const Description = ({ description }: string) => (
  <ModalDescriptionContainer>
    <ModalDescriptionText>
      {description}
    </ModalDescriptionText>
  </ModalDescriptionContainer>
);

const ModalDescriptionContainer = styled.section`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 200px;
  font-size: 12px;

  @media only screen and (min-width: 375px) {
    height: 280px;
  }

  @media only screen and (min-width: 1025px) {
    font-size: 16px;
  }
`;

const ModalDescriptionText = styled.p`
  line-height: 1.2;
  margin: 5px 0 0 0;
  padding: 5px;
  height: 100%;
`;

export default Description;