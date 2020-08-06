import React, { Component } from "react";
// import { v4 as uuid } from "uuid";

class IncompleteTodo extends Component {
  //   state = {
  //     todoList: [
  //       {
  //         id: uuid(),
  //         name: "Kelas Tambahan",
  //         isComplete: false,
  //       },
  //       {
  //         id: uuid(),
  //         name: "Daily Standup",
  //         isComplete: true,
  //       },
  //     ],
  //   };
  render() {
    const { todos, toggleTodo } = this.props;
    // const { todoList } = this.state;
    return (
      <div className="wrapper vertical">
        <h3>Todo List</h3>
        {todos
          // .filter((todo) => !todo.isComplete)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() => toggleTodo(todo.id)}
                />
                <label>{todo.name}</label>
                {/* <button onClick={() => toggleTodo(todo.id)}>Its Done</button> */}
              </div>
            );
          })}
      </div>
    );
  }
}

export default IncompleteTodo;
