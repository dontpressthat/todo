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

    this.addTask = this.addTask.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  };


  componentDidMount() {
    this.getTasks();
  };

  getTasks() {
    axios.get('/api/todo')
    .then(response => {
      // console.log(response);
      this.setState({
        taskList: response.data
      });
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
    .then(() => {
      this.getTasks();
    })
    .catch(err => {
      console.log(err);
    })
  };

  handleCheckBox(bool, id) {
    axios.put('/api/todo', {
      params: {
        bool: bool,
        id: id
      }
    })
    .catch(err => {
      console.log(err);
    })
  };

  render() {
    const { taskList } = this.state;

    return (
    <Container width='700px'>
      <TodoList taskList={taskList} addTask={this.addTask} handleCheckBox={this.handleCheckBox} />
    </Container>
    )
  };
};

export default App;

