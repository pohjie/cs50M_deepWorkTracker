import { configureStore } from "@reduxjs/toolkit";
import { timeReducer } from "./reducer";

const store = configureStore({ reducer: timeReducer })

export default store