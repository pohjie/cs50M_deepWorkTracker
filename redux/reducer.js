import { ADD_SESSION } from "./actions";

const initialState = { goal: 120,
                       dateArr: [],
                       loggedTimeArr: [], }

function timeReducer(state = initialState, action) {
  if (action.type === ADD_SESSION) {
    return {
      ...state,
      dateArr: action.payload.newDateArr,
      loggedTimeArr: action.payload.newLoggedTimeArr,
    }
  }
  return state
}

export { timeReducer }