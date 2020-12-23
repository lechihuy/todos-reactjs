import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import AllButton from './components/AllButton';
import PendingButton from './components/PendingButton';
import CompletedButton from './components/CompletedButton';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filter: 'all',
      todos: [

      ],
    };
  }

  addNewTask = e => {
    if (e.key === 'Enter') {
      let input = document.getElementById('new-task');
      let todos = this.state.todos.concat({
        task: input.value,
        isCompleted: false
      });

      input.value = '';

      this.setState({todos: todos});
    }
  } 

  toggleTaskComplete = (key) => {
    let todos = this.state.todos;
    todos[key].isCompleted = !todos[key].isCompleted;
    
    this.setState({todos: todos});
  }

  removeTask = (key) => {
    let todos = this.state.todos;
    todos.splice(key, 1);

    let filter = !todos.length ? 'all' : this.state.filter;

    this.setState({
      todos: todos,
      filter: filter
    });
  }

  switchFilter = (filter) => {
    this.setState({
      filter: filter,
    });
  }

  render() {
    return (
      <div className="Todo">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center vh-100">
            <div className="box">
              <h1 className="text-uppercase text-center mb-4">Todos</h1>
              <input type="text" className="lead p-2 mb-2 border rounded" id="new-task"
                placeholder="Type new task you want to add and press Enter..."
                onKeyDown={this.addNewTask}
              />
              <TodoList todos={this.state.todos} filter={this.state.filter} 
                toggleTaskComplete={this.toggleTaskComplete}
                removeTask={this.removeTask}
              />
              {this.state.todos.length > 0 && 
                <div className="filter mt-2 d-flex justify-content-center">
                  <AllButton filter={this.state.filter} switchFilter={this.switchFilter}/>
                  <PendingButton filter={this.state.filter} switchFilter={this.switchFilter}/>
                  <CompletedButton filter={this.state.filter} switchFilter={this.switchFilter}/>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
