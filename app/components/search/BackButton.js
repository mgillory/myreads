// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';
import withRouter from 'react-router-dom/withRouter';

type Props = {
  history: Function
}

const BackButtonComponent = ({ history }: Props) => {
  const goBackToBookshelf = () => history.push('/');

  return (
    <BackButtonContainer>
      <BackButton type="button" onClick={goBackToBookshelf}>
        {'<-'}
      </BackButton>
    </BackButtonContainer>
  );
};

const BackButtonContainer = styled.div`
  display: flex;
  width: 15%;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1025px) {
    width: 10%;
  }
`;

const BackButton = styled.button`
  width: 100%;
  height: 100%;
  color: #edf5e1;
  font-size: 25px;
  border: none;
  background: none;
  padding: 0 0 5px 0;

  @media only screen and (min-width: 1025px) {
    font-size: 70px;
    padding-left: 0 0 20px 0;
  }

  &:hover {
    color: #4cc984;
    cursor: pointer;
  }
`;

export default shouldUpdate(() => false)(withRouter(BackButtonComponent));
