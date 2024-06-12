import { Box, Button, styled, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const TodoForm = ({ onSubmit, onClose, data }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (data) {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setPassword(data.password);
      setId(data.id);
    }
  }, [data]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      firstName,
      lastName,
      email,
      password,
      id,
    };
    onSubmit(newTodo);
    onClose();
  };
  return (
    <BoxMui onSubmit={submitHandler} component={'form'}>
      <TextField
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        label="firtName"
      />
      <TextField
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        label="lastName"
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="password"
      />
      <Button variant="contained" type="submit">
        Create
      </Button>
      <Button type="button" onClick={onClose} variant="outlined">
        Cansel
      </Button>
    </BoxMui>
  );
};

export default TodoForm;

const BoxMui = styled(Box)(() => {
  return {
    width: 450,
    minHeight: 400,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: 20,
  };
});
