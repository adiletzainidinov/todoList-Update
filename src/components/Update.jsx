import React from 'react';
import TodoForm from './TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { upDateTodo } from '../store/clices/todoSlice/todoThunk';
import { Box, styled } from '@mui/material';

const Update = ({ onClose }) => {
  const { data } = useSelector((s) => s.todo);
  const dispatch = useDispatch();

  const upDateHandler = (param) => {
    dispatch(upDateTodo(param));
    onClose();
  };

  return (
    <BoxMui>
      <TodoForm onClose={onClose} onSubmit={upDateHandler} data={data} />
    </BoxMui>
  );
};

export default Update;
const BoxMui = styled(Box)(() => {
  return {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.55)',
    position: 'absolute',
    top: '0',
  };
});
