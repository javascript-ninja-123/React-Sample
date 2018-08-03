import React from 'react';
import styled from 'styled-components';
import {ContentContext} from './content';

const Input = styled.input`
  width:100%;
  border:unset;
  border-radius: 5px;
  border:1px solid black;
  height:2rem;
`

export const Search  = () => (
    <ContentContext.Consumer>
      {
        ({value,onChange}) => (
          <Input value={value} onChange={onChange}/>
        )
      }
    </ContentContext.Consumer>
)
