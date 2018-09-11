// @flow
import * as React from 'react';
import withRouter from 'react-router-dom/withRouter';
import styled from 'styled-components';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';

import SearchIcon from 'Assets/icons/search.svg';

const HeaderSearchIcon = ({ history }: { history: Function }) => {
  const goToSearchPage = () => {
    history.push('/search');
  };

  return (
    <BookshelfHeaderSearchIconContainer>
      <BookshelfHeaderSearchIcon src={SearchIcon} onClick={goToSearchPage} />
    </BookshelfHeaderSearchIconContainer>
  );
};


const BookshelfHeaderSearchIconContainer = styled.div`
  display: flex;
  width: 10%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  &:hover {
    background-color: #4cc984;
  }
`;

const BookshelfHeaderSearchIcon = styled.img`
  width: 70%;
  height: 70%;
  pointer-events: auto;
  cursor: pointer;
`;

export default onlyUpdateForKeys(['text'])(withRouter(HeaderSearchIcon));