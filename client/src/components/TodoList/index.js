import React from 'react';
import { Container } from './style';
import TodoListItem from '../TodoListItem';
import AddToList from '../AddToList';

const TodoList = ({ taskList, addTask, handleCheckBox }) => {

  return (
    <Container>
      {taskList.map((taskItem, idx) => (
        <TodoListItem
          key={idx}
          id={idx}
          task={taskItem.taskName}
          dueDate={taskItem.dueDate}
          handleCheckBox={handleCheckBox}
        />
      ))}
      <AddToList addTask={addTask} />
    </Container>
  )
};

export default TodoList;