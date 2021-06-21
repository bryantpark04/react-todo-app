import './App.css';
import React from 'react';

import Header from './Header';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

// should probably make a distinction between todo id and idx, since we're reordering
let idx = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  addTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        { idx: idx++, text: text, done: false }
      ]
    })
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
      <div style={{ maxWidth: 300, alignSelf: 'center' }}>
        <Header />
        <div>
          <TodoList todos={this.state.todos} swapTodos={(idx1, idx2) => this.swapTodos(idx1, idx2)} editTodo={(idx, newText) => this.editTodo(idx, newText)} toggleTodo={(idx) => this.toggleTodo(idx)} />
          <TodoInput addTodo={(text) => this.addTodo(text)} />
        </div>
      </div >
    )
  }
}

export default App;
