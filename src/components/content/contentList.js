import React from 'react';
import styled from 'styled-components';
import {Card} from '../common';
import {ContentContext} from './content';
const ListContainer = styled.ul`
  list-style: none;
  margin:0;
  padding:2rem 3rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns:repeat(auto-fill,minmax(15rem,1fr));
  grid-auto-rows: auto;
  width:100%;
  justify-items: center;
   align-items: center;
`

export const List = ({contentList}) => (
  <ContentContext.Consumer>
    {
      ({contentList}) => (
        <ListContainer>
          {
            contentList.reduce((acc,val,i) => {
              const newVal = <Card key={val.body + i} {...val}/>
              acc[i] = newVal;
              return acc;
            },new Array(contentList.length))
          }
        </ListContainer>
      )
    }
  </ContentContext.Consumer>
)
