import React, { useState, useEffect } from 'react';
import { Input, Container } from './style';
import { plus } from '../../assets/svg';

const AddToList = ({ name, addTask }) => {

  const [task, setTask] = useState({
    taskName: '',
    dueDate: '',
  });

  const handleInput = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setTask({
      ...task,
      [name]: value
    });
  };

  const handleSubmit = () => {
    addTask(task);
    setTask({
      taskName: '',
      dueDate: ''
    });
  };

  const handleEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit();
    };
  };

  useEffect(() => {

  });

  return (
    <Container display='flex' direction='row' justify='space-between' align='center' width='100%'>

      <Container width='75%' padding='0 20px 0 20px' margin='0 0 0 40px'>
        <Input name='taskName' placeholder='Add Task' width='100%' onChange={handleInput} value={task.taskName} required />
      </Container>

      <Container width='25%' display='flex' direction='row' justify='space-between'>
        <Input name='dueDate' placeholder='Due Date' onChange={handleInput} value={task.dueDate} width='60%' onKeyPress={handleEnter} required />

        <Container onClick={handleSubmit} display='flex' direction='row' align='center'>
          {plus}
        </Container>

      </Container>
    </Container>
  )
};

export default AddToList;