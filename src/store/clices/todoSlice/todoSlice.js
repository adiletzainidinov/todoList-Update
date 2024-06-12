import { createSlice } from '@reduxjs/toolkit';
import { getTodos } from './todoThunk';

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
  data: {},
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    editId(state, { payload }) {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, { payload }) => {
        state.todos = payload;
        state.isLoading = false;
      })
      .addCase(getTodos.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { editId } = todoSlice.actions;
