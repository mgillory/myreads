// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

type Props = {
  closeAction: Function,
}

const Close = ({ closeAction }: Props) => (
  <CloseButton
    type="button"
    onClick={closeAction}
  >
    X
  </CloseButton>
);

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  background: none;
  -webkit-appearance: none;
  border: none;
  cursor: pointer;
  color: #05386b;
  z-index: 2;

  &:hover {
    color: #4cc984;
  }

  @media only screen and (min-width: 768px) {
    top: 10px;
    right: 10px;
    font-size: 36px;
  }
`;

export default shouldUpdate(() => false)(Close);
