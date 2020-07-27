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

  useEffect(() => {
    
  });

  return (
    <Container display='flex' direction='row' justify='space-between' align='center'>
      <Input name='taskName' placeholder='Add Task' width='60%' onChange={handleInput} value={task.taskName} />
      <Input name='dueDate' placeholder='Due Date' width='40%' onChange={handleInput} value={task.dueDate} />
      <Container onClick={handleSubmit}>
        {plus}
      </Container>
    </Container>
  )
};

export default AddToList;