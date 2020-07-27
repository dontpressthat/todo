import React, { useState } from 'react';
import { Container, Text } from './style';
import { unchecked, checked } from '../../assets/svg';


const TodoListItem = ({ id, task, dueDate, handleCheckBox }) => {
  const [finished, setFinished] = useState(false);

  const backgroundColor = id % 2 === 0 ? 'lightgray' : 'white';
  const lineThrough = finished ? 'line-through' : null;
  const isChecked = finished ? checked : unchecked;

  // const handleCheck = () => {
  //   setFinished(!finished);
  // };

  // useEffect(() => {
  //   this.props.handleCheckBox(finished, id);
  // });

  return (
    <Container display='flex' direction='row' bgColor={backgroundColor} width='600px' height='50px' align='center' justify='space-between' padding='0 20px 0 20px'>

      <Container display="flex" direction="row" height='100%' align='center' lineHeight='50px'>
        <Container onClick={() => handleCheckBox(finished, id)} margin='0 20px 0 0'>
          {isChecked}
        </Container>

        <Container display="flex" direction="row" height='100%' align='center' >
          <Text decoration={lineThrough}>
            {task}
          </Text>
        </Container>
      </Container>


      <Container display="flex" direction="row" height='100%' align='center'>
        <Text>
          {dueDate}
        </Text>
      </Container>

    </Container>
  )
};

export default TodoListItem;