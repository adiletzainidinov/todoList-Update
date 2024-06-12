import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { deleteTodo } from '../store/clices/todoSlice/todoThunk';
import { editId } from '../store/clices/todoSlice/todoSlice';

function TodoList({ onCloseEdit }) {
  const { todos } = useSelector((s) => s.todo);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const toggleEdit = (id) => {
    const updateId = todos.find((item) => item.id === id);
    dispatch(editId(updateId))
    onCloseEdit()
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos?.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.password}</TableCell>
              <TableCell>
                <Button
                  onClick={() => deleteHandler(item.id)}
                  variant="contained"
                  color={'error'}
                >
                  Delete
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => toggleEdit(item.id)} variant="outlined" color="info">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TodoList;
