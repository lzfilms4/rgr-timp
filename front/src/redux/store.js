import { configureStore } from '@reduxjs/toolkit'
import personsSlice from './slices/personsSlice'

export const store = configureStore({
  reducer: {
    persons: personsSlice,
  },
})