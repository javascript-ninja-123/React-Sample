import {
  FETCH_CONTENT,
  FETCH_CONTENT_FAILED,
  FETCH_CONTENT_FUFILLED,
  SEARCH_CONTENT
} from './type';
import axios from 'axios';


export const fetchContent = () => async dispatch => {
  try{
    dispatch({
      type:FETCH_CONTENT
    })
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
    dispatch({
      type:FETCH_CONTENT_FUFILLED,
      payload:data
    })
  }
  catch(err){
    dispatch({
      type:FETCH_CONTENT_FAILED,
      payload:err
    })
  }
}

export const searchContent  = text => (
  {
    type:SEARCH_CONTENT,
    payload:text
  }
)
