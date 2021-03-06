// @flow
import * as React from 'react';
import styled from 'styled-components';
import shouldUpdate from 'recompose/shouldUpdate';

import SignUp from './SignUp';
import SignIn from './SignIn';

type Props = {
  isSignUpForm: boolean,
  updateFullname: Function,
  updateEmail: Function,
  updatePassword: Function,
}

/**
 * @constructor Field
 * @param {props} - Fields props
 * @description Renders the specific form field (signin or signup)
 */
const Fields = (props: Props) => {
  const {
    isSignUpForm,
    updateFullname,
    updateEmail,
    updatePassword,
  } = props;

  return (
    <FormFieldsContainer>
      {isSignUpForm
        ? (
          <SignUp
            updateFullname={updateFullname}
            updateEmail={updateEmail}
            updatePassword={updatePassword}
          />)
        : (
          <SignIn
            updateEmail={updateEmail}
            updatePassword={updatePassword}
          />)}
    </FormFieldsContainer>
  );
};

const FormFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin-bottom: 10px;

  @media only screen and (min-width: 375px) {
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

/* istanbul ignore next */
const shouldComponentUpdate = (props, nextProps) => {
  const { isSignUpForm } = props;
  return isSignUpForm !== nextProps.isSignUpForm;
};

export default shouldUpdate(shouldComponentUpdate)(Fields);
