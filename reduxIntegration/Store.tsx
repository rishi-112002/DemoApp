import {configureStore} from '@reduxjs/toolkit'                
import {counterSlice, insertSlice} from './Reducer';

export const store = configureStore({
    reducer: {counter: counterSlice.reducer, insert: insertSlice.reducer},
  });

  export type RootState = ReturnType<typeof store.getState>;

  export type AppDispatch = typeof store.dispatch;

