// action types
export const UPDATE_TIME = 'UPDATE_TIME'

// action creators
export const updateTime = timer => {
  return {
    type: UPDATE_TIME,
    payload: timer,
  }
}