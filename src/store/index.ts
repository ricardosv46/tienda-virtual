import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authslice'

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

export type Appdispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
