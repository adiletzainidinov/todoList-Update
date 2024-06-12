import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './clices/todoSlice/todoSlice';

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
  },
});
