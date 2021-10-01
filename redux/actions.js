// action types
export const ADD_SESSION = 'ADD_SESSION'
export const UPDATE_GOAL = 'UPDATE_GOAL'

// action creators
export const addSession = (mins) => {
  return {
    type: ADD_SESSION,
    payload: mins,
  }
}

export const updateGoal = (goal) => {
  return {
    type: UPDATE_GOAL,
    payload: goal,
  }
}