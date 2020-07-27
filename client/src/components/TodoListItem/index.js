import React, { useState, useEffect } from 'react';
import { Container, Text } from './style';
import { unchecked, checked } from '../../assets/svg';


const TodoListItem = ({ id, task, dueDate, isDone, handleCheckBox }) => {

  const [finished, setFinished] = useState(isDone);

  const backgroundColor = id % 2 === 0 ? 'lightgray' : 'white';
  const lineThrough = finished ? 'line-through' : null;
  const isChecked = finished ? checked : unchecked;

  const handleCheck = () => {
    setFinished(!finished);
  };

  useEffect(() => {
    handleCheckBox(finished, id)
  });

  return (
    <Container display='flex' direction='row' bgColor={backgroundColor} width='100%' height='50px' align='center' justify='space-between' padding='0 0 0 20px'>

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


      <Container width='25%'>
        <Text>
          {dueDate}
        </Text>
      </Container>

    </Container>
  )
};

export default TodoListItem;