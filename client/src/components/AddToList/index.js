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
      <Container width='75%' padding='0 20px 0 20px'  margin='0 0 0 40px'>
        <Input name='taskName' placeholder='Add Task' width='100%' onChange={handleInput} value={task.taskName} />
      </Container>
      <Container width='25%' display='flex' direction='row' justify='space-between'>
        <Input name='dueDate' placeholder='Due Date' width='100%' onChange={handleInput} value={task.dueDate} />
      <Container onClick={handleSubmit}>
        {plus}
      </Container>
      </Container>
    </Container>
  )
};

export default AddToList;