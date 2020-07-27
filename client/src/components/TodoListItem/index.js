import React, { useState, useEffect } from 'react';
import { Container, Text } from './style';
import { unchecked, checked, trash } from '../../assets/svg';


const TodoListItem = ({ id, task, dueDate, isDone, handleCheckBox, handleDelete, listNum }) => {

  const [finished, setFinished] = useState(isDone);

  const backgroundColor = listNum % 2 === 0 ? 'lightgray' : 'white';
  const lineThrough = finished ? 'line-through' : null;
  const isChecked = finished ? checked : unchecked;

  const handleCheck = () => {
    setFinished(!finished);
  };

  useEffect(() => {
    handleCheckBox(finished, id)
  });

  return (
    <Container display='flex' direction='row' bgColor={backgroundColor} width='100%' height='50px' align='center' justify='space-between' padding='0 20px 0 20px'>

      <Container display="flex" direction="row" height='100%' align='center' lineHeight='50px' width='75%'>
        <Container display='flex' direction='row'>
          <Container onClick={handleCheck} margin='0 20px 0 0'>
            {isChecked}
          </Container>

          <Text decoration={lineThrough}>
            {task}
          </Text>
        </Container>
      </Container>


      <Container width='25%' display='flex' direction='row' justify='space-between'>
        <Text>
          {dueDate}
        </Text>
        <Container onClick={() => { handleDelete(id) }}>
          {trash}
        </Container>
      </Container>

    </Container>
  )
};

export default TodoListItem;