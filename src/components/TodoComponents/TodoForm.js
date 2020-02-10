import React, { Component } from 'react';

class TodoForm extends Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newTask: '',
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      // [e.target.name]: e.target.value
      newTask: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    console.log('what is logged', this.state.newTask.completed)
    this.setState({ newTask: '' });
   
  };

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="newItem"
          value={this.state.newTask}
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
