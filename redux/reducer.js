import { ADD_SESSION } from "./actions";

const initialState = { day: 0, goal: 120, past: 0 }

function timeReducer(state = initialState, action) {
  if (action.type === ADD_SESSION) {
    return {
      ...state,
      day: state.day + action.payload
    }
  }
  return state
}

export { timeReducer }