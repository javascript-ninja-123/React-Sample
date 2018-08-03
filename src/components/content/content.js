import React,{Component} from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';
import {fetchContent,searchContent} from '../../actions';

import {Search} from './contentSearch';
import {Button} from './contentButton';
import {List} from './contentList';

import IsLoading from '../../hoc/isLoading';
import {promisify} from '../../utils';

export const ContentContext = React.createContext();

const ContentContainer = styled.div`
  flex:1;
  padding:1rem .5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`,
  FormContainer = styled.form`
    width:80%;
    display: flex;
    & > * {
      margin:0 .4rem;
    }
    & > input {
      flex: 0 0 70%;
    }
    & > button {
      flex:1;
    }
  `

class Content extends Component {
    componentDidMount() {
      this.props.fetchContent()
    }
    onChange = async (e) => {
      await promisify(() => this.setState({value:e.target.value}))
      this.props.searchContent(this.state.value)
    }
    onClick = (e) => {
      e.preventDefault();
    }
    componentDidUpdate(prevProps, prevState) {
      if(this.props.contentList !== prevProps.contentList){
        this.setState({contentList:this.props.contentList})
      }
    }
    state = {
      value:"",
      onClick:this.onClick,
      onChange:this.onChange,
      contentList:[]
    }
    render() {
        return (
            <IsLoading loading={this.props.loading}>
              <ContentContext.Provider value={this.state}>
                <ContentContainer>
                    <FormContainer>
                      <Search/>
                      <Button/>
                    </FormContainer>
                    <List/>
                </ContentContainer>
            </ContentContext.Provider>
          </IsLoading>
        );
    }
}

const mapStateToProps = ({content}) => {
  const {loading,error,contentList} = content;
  return{loading,error,contentList}
}

export default connect(mapStateToProps,{fetchContent,searchContent})(Content)
