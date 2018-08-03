import React from 'react';
import styled from 'styled-components';
import {ContentContext} from './content';
const StyledButton = styled.button`
  background-color:gold;
  color:white;
  min-width:150px;
  border:unset;
  border-radius:3px;
  &:focus{
    outline: unset;
  }
`

export const Button = () => (
  <ContentContext.Consumer>
    {
      ({onClick}) => (
        <StyledButton onClick={onClick}>Search</StyledButton>
      )
    }
  </ContentContext.Consumer>
)
