import React, { useEffect, useState } from 'react';
import Create from './Create';
import TodoList from './TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../store/clices/todoSlice/todoThunk';
import { Button } from '@mui/material';
import Update from './Update';

const Wrapper = () => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const { todos, data } = useSelector((s) => s.todo);

  const onClose = () => setOpen((prev) => !prev);
  const onCloseEdit = () => setOpenEdit((prev) => !prev);

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      <Button sx={{ m: 2 }} onClick={onClose} variant="contained" type="button">
        {open ? 'Close' : 'Open'}
      </Button>
      {open ? (
        <Create onClose={onClose} />
      ) : (
        <TodoList onCloseEdit={onCloseEdit} />
      )}
      {openEdit && <Update onClose={onCloseEdit} />}
    </div>
  );
};

export default Wrapper;
