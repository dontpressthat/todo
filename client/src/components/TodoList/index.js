import React from 'react';
import { Container } from './style';
import TodoListItem from '../TodoListItem';
import AddToList from '../AddToList';

const TodoList = ({ taskList, addTask, handleCheckBox, handleDelete }) => {

  return (
    <Container width='100%'>
      {taskList.map((taskItem, idx) => (
        <TodoListItem
          key={taskItem.id}
          id={taskItem.id}
          listNum={idx}
          task={taskItem.task_name}
          dueDate={taskItem.due_date}
          isDone={taskItem.is_done}
          handleCheckBox={handleCheckBox}
          handleDelete={handleDelete}
        />
      ))}
      <AddToList addTask={addTask} />
    </Container>
  )
};

export default TodoList;