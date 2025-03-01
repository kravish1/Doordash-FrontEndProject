import * as actionTypes from './types';

//User Actions
export const setUser = (user)=>{
  return {
    type : actionTypes.SET_USER,
    payload : {
      currentUser : user
    }
  }
}

//Channel Actions
export const setCurrentChannel = (channel)=>{
    return{
      type : actionTypes.SET_CURRENT_CHANNEL,
      payload : {
        currentChannel : channel
      }
    }
  }