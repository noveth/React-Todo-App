import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Custom import
import Header from './components/header';
import Footer from './components/footer';
import Inputs from './components/todo_inputs';
import TodoItem from './components/todo_items';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      nextId: 2
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div id="todo-wrapper">
          <Header />
          <Inputs TodoText="" addTodo={this.addTodo}/>
          <ul className="itemsWrapper">
            {
             this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
             })
            }
          </ul>
        </div>
         <Footer />
      </div>
    );
  }
}

export default App;
