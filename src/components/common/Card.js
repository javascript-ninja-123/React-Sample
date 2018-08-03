import React, {PureComponent} from 'react';
import styled from 'styled-components';
import { Card, Icon, Image } from 'semantic-ui-react'
import {Box,compose} from '../../utils';

const StyledCard = styled(Card)`
  height:20rem;
  margin:0 !important;
`


export default class CARD extends PureComponent{
  state = {
    title:''
  }
  componentDidMount(){

    const upperCase = str => str.toUpperCase();
    const scream = str => `${str}!`
    const title = Box(this.props.title)
    .map(upperCase)
    .map(scream)
    .fold()
    this.setState({title})
  }
  render(){
    return(
      <StyledCard>
        <Card.Content>
          <Card.Header>{this.state.title}</Card.Header>
          <Card.Description>{this.props.body}</Card.Description>
        </Card.Content>
      </StyledCard>
    )
  }
}
