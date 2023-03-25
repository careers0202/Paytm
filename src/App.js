import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';

class App extends Component {
  constructor() {
    super();
    this.state = { // state management
      inputData: '',
      todos: [],
      searchKeyword: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputData: event.target.value
    })
  }

  handleTodos() {
    const { inputData } = this.state;
    if (inputData) {
      this.state.todos.push({ name: inputData, completed: false });
      this.setState({
        todos: this.state.todos,
        inputData: ''
      })
    }

  }

  handleCheckBox = (eve, item) => {
    console.log('check', eve.target.checked, item);
    const { todos } = this.state;
    const index = todos.findIndex((todo) => {
      return todo.name === item.name
    })

    todos[index].completed = eve.target.checked;

    this.setState({
      todos: todos
    })

  }

  handleSearch(event) {
    this.setState({
      searchKeyword: event.target.value
    })
  }


  render() {
    const { todos, inputData, searchKeyword } = this.state;
    console.log('todos', todos, 'searchkey', searchKeyword);
    let filteredData = todos;
    if (searchKeyword) {
      console.log('went inside')
      filteredData = todos.filter((todo) => {
        return todo.name.includes(searchKeyword)
      })
    }


    return (
      <>
        <Home />
      </>
    )
  }
}

export default App; // deafult export

// Controlled component - if u control input value using state

// within the component data management ----> state (App)
// Passing data from Parent to child ----> props (App to Output)
// Pass data from Child to parent ----> (Output to App)


// export App; // named export

// JSX ----> Javascript XHTML


// i am react

// i Am React --- camelCase

// store input data --- inputval
//-- todos:[]

// this.state.todos.push(this.state.inputval)

// todos:this.state.todos

// todos.map(()=>{

// })