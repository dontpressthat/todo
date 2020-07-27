import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import TodoList from './components/TodoList';
import axios from 'axios';

const Container = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
`;


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: []
    };

    // this.addItem = this.addItem.bind(this);
    this.addTask = this.addTask.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  };

  // addItem(itemObj) {
  //   this.setState({
  //     taskList: [
  //       ...this.state.taskList,
  //       itemObj
  //     ]
  //   });
  // };

  getTasks() {
    axios.get('/api/todo')
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  };

  addTask(task) {
    axios.post('/api/todo', {
      params: {
        task: task
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  };

  handleCheckBox(bool, id) {

    console.log(bool, id)
    // axios.put('/api/todo', {
    //   params: {
    //     bool: bool,
    //     id: id
    //   }
    // })
  };

  render() {
    const { taskList } = this.state;

    return (
    <Container>
      <TodoList taskList={taskList} addTask={this.addTask} handleCheckBox={this.handleCheckBox} />
    </Container>
    )
  };
};

export default App;

