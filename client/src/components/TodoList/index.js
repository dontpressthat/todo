import React from 'react';
import { Container } from './style';
import TodoListItem from '../TodoListItem';
import AddToList from '../AddToList';

const TodoList = ({ taskList, addTask, handleCheckBox }) => {

  return (
    <Container width='100%'>
      {taskList.map(taskItem => (
        <TodoListItem
          key={taskItem.id}
          id={taskItem.id}
          task={taskItem.task_name}
          dueDate={taskItem.due_date}
          isDone={taskItem.is_done}
          handleCheckBox={handleCheckBox}
        />
      ))}
      <AddToList addTask={addTask} />
    </Container>
  )
};

export default TodoList;