import { configureStore } from '@reduxjs/toolkit'
import { apiCalling, authenction, counterSlice, insertSlice } from './Reducer';

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, insert: insertSlice.reducer, auth: authenction.reducer, empData: apiCalling.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const changeInputValue = (email: any) => ({ type: changeInputValue, payload: email })
export const changeInputValuePassword = (password: any) => ({ type: changeInputValuePassword, payload: password })
