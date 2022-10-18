import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        // id: uuid.v4(),
        id:uuidv4(),
        title: "Take my bath",
        completed: false,
      },
      {
        id:uuidv4(),
        title: "Set-Up my working space",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Set-Up development environment (React)",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Continue developing website and add content",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to Firebase",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
        <footer style={{ marginTop:"5em", textAlign:"center" }}>
          &copy; 2022 Sanusi Abdulkadir
        </footer>
      </div>
    );
  }
}
export default TodoContainer;
