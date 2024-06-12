import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_URL_TODO;

export const getTodos = createAsyncThunk(
  'todo/getTodo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/todo.json`);
      const transform = response.data;
      const data = [];
      for (let key in transform) {
        data.push({
          id: key,
          firstName: transform[key].firstName,
          lastName: transform[key].lastName,
          email: transform[key].email,
          password: transform[key].password,
        });
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const posetTodos = createAsyncThunk(
  'todo/postTodo',
  async (newTodo, { rejectWithValue, dispatch }) => {
    try {
      await axios.post(`${BASE_URL}/todo.json`, newTodo);
      dispatch(getTodos());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`${BASE_URL}/todo/${id}.json`);
      dispatch(getTodos());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const upDateTodo = createAsyncThunk(
  'todo/updateTodo',
  async (param, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(`${BASE_URL}/todo/${param.id}.json`, param);
      dispatch(getTodos());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
