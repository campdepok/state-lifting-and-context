import React, { Component } from "react";

class CompleteTodo extends Component {
  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <div className="wrapper vertical">
        <h3>Done</h3>
        <ol>
          {todos
            .filter((todo) => todo.isComplete)
            .map((todo) => {
              return (
                <li key={todo.id}>
                  <p>{todo.name}</p>
                  <button onClick={() => toggleTodo(todo.id)}>
                    Do It Again
                  </button>
                </li>
              );
            })}
        </ol>
      </div>
    );
  }
}

export default CompleteTodo;
