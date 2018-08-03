import { combineReducers } from 'redux';
import ContentReducer from './content';


const rootReducer = combineReducers({
content:ContentReducer
});

export default rootReducer;
