import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import thunk from 'redux-thunk'

import reducer, { timeReducer } from "./reducer";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ 
                      reducer: persistedReducer,
                      middleware: [thunk] })
export const persistor = persistStore(store)
