import React,{Component} from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const LeftBarContainer = styled.div`
  flex:0 0 20%;
  background-color:gold;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding:1rem .5rem;
`,
 StyledLink = styled(NavLink)`
  color:black;
  &:hover{
    color:grey;
    text-decoration: none;
  }
`,
activeColor = {fontWeight:'bold', color:'blue'},
LeftBar = () => (
  <LeftBarContainer>
      <StyledLink to="/asset" activeStyle={activeColor}>Asset</StyledLink>
      <StyledLink to="/collection" activeStyle={activeColor}>Collection</StyledLink>
  </LeftBarContainer>
)


export default LeftBar
