import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice';
import newsReducer from './news/newsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news:newsReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch