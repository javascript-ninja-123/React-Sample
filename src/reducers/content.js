import {
  FETCH_CONTENT,
  FETCH_CONTENT_FAILED,
  FETCH_CONTENT_FUFILLED,
  SEARCH_CONTENT
} from '../actions';


const INITIAL_STATE = {
  error:null,
  loading:false,
  contentList:[],
  savedContentList:[]
}


const content = (state,{type,payload}) => {
  switch(type){
    case SEARCH_CONTENT:
    const newList = state.savedContentList.reduce((acc,val) => {
      if(val.title.includes(payload)){
        acc.push(val)
        return acc;
      }
      return acc;
    },[])
    return {...state, contentList:newList}
    case FETCH_CONTENT:
    return {...state, loading:true};
    case FETCH_CONTENT_FUFILLED:
    return {...state, loading:false, contentList:payload, savedContentList:payload};
    case FETCH_CONTENT_FAILED:
    return {...state, loading:false, error:payload}
    default:
    return state;
  }
}


export default (state = INITIAL_STATE, action) =>  content(state,action);
