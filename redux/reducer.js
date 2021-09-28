import { UPDATE_TIME } from "./actions";

const initialState = { day: 70, goal: 120, past: 0 }

function timeReducer(state = initialState, action) {
  if (action.type === UPDATE_TIME) {
    return {
      ...state,
      day: state.day + action.payload
    }
  }
  return state
}

export { timeReducer }