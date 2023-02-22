import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  isAuth: boolean
}

const initialState: AuthState = {
    isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state) => {
      state.isAuth= true;

    },
    signOut: (state) => {
    state.isAuth= false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = authSlice.actions

export default authSlice.reducer