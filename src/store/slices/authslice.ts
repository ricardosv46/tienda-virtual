import { LoginResponse } from '@generated/graphql'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: LoginResponse | null
  isAuth: boolean
}

const initialState: AuthState = {
  user: null,
  isAuth: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAction: (state: AuthState) => {
      state.user = null
      state.isAuth = false
      localStorage.removeItem('token')
    },
    loginAction: (state: AuthState, { payload }: { payload: LoginResponse }) => {
      state.user = payload
      state.isAuth = true
    }
  }
})
export const { logoutAction, loginAction } = authSlice.actions
export default authSlice.reducer
