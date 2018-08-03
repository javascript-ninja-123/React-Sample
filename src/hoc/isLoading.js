import React, {Component,Fragment} from 'react';
import styled from 'styled-components';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const StyledSegment = styled(Segment)`
  width:100%;
  margin:0 !important;
`

class IsLoading extends Component{
  render(){
    if(this.props.loading){
      return (
        <StyledSegment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </StyledSegment>
      )
    }
    return(
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}



export default IsLoading
