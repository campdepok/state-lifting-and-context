import React, { Component } from "react";

class AddTodo extends Component {
  constructor() {
    super();
    this.newTodoList = React.createRef();
  }

  render() {
    const { handleAddTodo } = this.props;
    return (
      <div className="wrapper center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTodo(this.newTodoList);
          }}
        >
          <input type="text" ref={this.newTodoList} />
          <button type="submit">Add Todo List</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
