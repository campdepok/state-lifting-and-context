import React from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

import "./style.css";
import CompleteTodo from "./CompleteTodo";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

class Home extends React.Component {
  state = {
    todoList: [
      {
        id: uuid(),
        name: "Kelas Tambahan",
        isComplete: false,
      },
      {
        id: uuid(),
        name: "Daily Standup",
        isComplete: true,
      },
    ],
  };
  handleAddTodo = (inputRef) => {
    // e.preventDefault();
    const { todoList } = this.state;
    const arrTodoList = [...todoList]; //Clone or Copy
    // const arrTodoList2 = todoList; //Reference
    arrTodoList.push({
      id: uuid(),
      name: inputRef.current.value,
      isComplete: false,
    });
    this.setState({
      todoList: arrTodoList,
    });
    inputRef.current.value = null;
  };
  toggleTodo(id) {
    const { todoList } = this.state;
    const arrTodo = [...todoList];
    const result = arrTodo.map((todo) => {
      return todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo;
    });
    this.setState({
      todoList: result,
    });
  }
  render() {
    // console.log(this.state.todoList);
    const { todoList } = this.state;
    return (
      <>
        <h1>Todo List</h1>
        <Link to="/context">
          <button>Context</button>
        </Link>
        {/* {todoList.map((todo) => {
          return (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => this.toggleTodo(todo.id)}
              />
              <label>{todo.name}</label>
            </div>
          );
        })} */}
        {/* <ol>
          {todoList.map((todo) => {
            return <li key={todo.id}>{todo.name}</li>;
          })}
        </ol> */}
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <div className="wrapper horizontal">
          <TodoList todos={todoList} toggleTodo={this.toggleTodo.bind(this)} />
          <CompleteTodo
            todos={todoList}
            toggleTodo={this.toggleTodo.bind(this)}
          />
        </div>
      </>
    );
  }
}

export default Home;
