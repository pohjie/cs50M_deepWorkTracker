// action types
export const ADD_SESSION = 'ADD_SESSION'

// action creators
export const addSession = (mins) => {
  return {
    type: ADD_SESSION,
    payload: mins,
  }
}