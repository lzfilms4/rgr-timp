import { configureStore } from '@reduxjs/toolkit'
import personsSlice from './slices/personsSlice'
import { authReducer } from "./slices/auth";

export const store = configureStore({
  reducer: {
    persons: personsSlice,
    auth: authReducer,
  },
})