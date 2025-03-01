import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

const initialUserState = {
  currentUser : null,
  timestamp : new Date(0)
}

const user_reducer = (state = initialUserState,action)=>{
  switch(action.type){
    case actionTypes.SET_USER:
      return {
        currentUser : action.payload.currentUser,
        timestamp : new Date(0)
      }
    default:
      return state;
  }
}

const initialChannelState = {
    currentChannel : null,
  }
  
  const channel_reducer = (state = initialChannelState,action)=>{
    switch(action.type){
      case actionTypes.SET_CURRENT_CHANNEL:
        return {
          ...state,
          currentChannel : action.payload.currentChannel
        }
      default:
        return state;
    }
  }

const rootReducer = combineReducers({
    user : user_reducer,
    channel : channel_reducer
  });
  
  export default rootReducer;