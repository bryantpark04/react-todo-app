import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import StorageControl from './components/StorageControl';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  loadTodos() {
    const todoList = JSON.parse(localStorage.getItem("todos"));
    if (todoList) this.setState({ todos: todoList })
  }

  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  addTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        { idx: this.state.todos.length, text: text, done: false }
      ]
    });
  }

  deleteTodo(idx) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.idx !== idx)
    });
  }

  swapTodos(idx1, idx2) {
    if (idx2 === -1 || idx2 === this.state.todos.length) return;
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.idx === idx1) return { ...this.state.todos[idx2], idx: idx1 }
        else if (todo.idx === idx2) return { ...this.state.todos[idx1], idx: idx2 }
        else return todo;
      })
    })
  }

  editTodo(idx, newText) {
    this.setState({
      todos: this.state.todos.map(todo => todo.idx !== idx ? todo : { ...todo, text: newText }
      )
    })
  }

  toggleTodo(idx) {
    this.setState({
      todos: this.state.todos.map(todo => todo.idx !== idx ? todo : { ...todo, done: !todo.done }
      )
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col><Header /></Col>
          <Col sm="auto"><StorageControl loadTodos={() => this.loadTodos()} saveTodos={() => this.saveTodos()} /></Col>
        </Row>
        <Row>
          <Col>
            <TodoList
              todos={this.state.todos}
              swapTodos={(idx1, idx2) => this.swapTodos(idx1, idx2)}
              editTodo={(idx, newText) => this.editTodo(idx, newText)}
              toggleTodo={(idx) => this.toggleTodo(idx)}
              deleteTodo={(idx) => this.deleteTodo(idx)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <TodoInput addTodo={(text) => this.addTodo(text)} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
