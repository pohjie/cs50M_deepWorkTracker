import { combineReducers } from "redux";
import { ADD_SESSION, UPDATE_GOAL } from "./actions";

function timeReducer(state = {dateArr: [], loggedTimeArr: []}, action) {
  if (action.type === ADD_SESSION) {
    return {
      ...state,
      dateArr: action.payload.newDateArr,
      loggedTimeArr: action.payload.newLoggedTimeArr,
    }
  }
  return state
}

function goalReducer(state = {goal: 120}, action) {
  if (action.type === UPDATE_GOAL) {
    return {
      ...state,
      goal: action.payload,
    }
  }
  return state
}

const reducer = combineReducers({
  timeReducer: timeReducer,
  goalReducer: goalReducer,
})

export default reducer
export { timeReducer }