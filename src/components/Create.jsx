import React from 'react';
import TodoForm from './TodoForm';
import { useDispatch } from 'react-redux';
import { posetTodos } from '../store/clices/todoSlice/todoThunk';
import { Box, styled } from '@mui/material';

const Create = ({onClose}) => {
  const dispatch = useDispatch();

  const addTodo = (data) => {
    dispatch(posetTodos(data));
  };
  return (
    <BoxMui>
      <TodoForm onClose={onClose} onSubmit={addTodo} />
    </BoxMui>
  );
};

export default Create;

const BoxMui = styled(Box)(() => {
  return {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.65)',
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
});
