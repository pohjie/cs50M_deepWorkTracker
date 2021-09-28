// action types
export const UPDATE_TIMER = 'UPDATE_TIMER'

// action creators
export const updateTimer = timer => {
  return {
    type: UPDATE_TIMER,
    payload: timer,
  }
}