import React,{Component} from 'react';
import styled from 'styled-components';
import {LeftBar,Content} from '../../components'

const MyAssetContainer = styled.div`
  width:100vw;
  min-height:100vh;
  display: flex;
`

class MyAsset extends Component {
    render() {
        return (
            <MyAssetContainer>
                <LeftBar/>
                <Content/>
            </MyAssetContainer>
        );
    }
}

export default MyAsset
