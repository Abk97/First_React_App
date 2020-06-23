import React from "react";
import "./styles.css";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import ToDoItems from "./components/ToDoItems";
import todosData from "./components/todosData";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          const newTodo = {
            id: todo.id,
            text: todo.text,
            completed: !todo.completed
          };
          //console.log(newTodo)
          return newTodo;
        }
        return todo;
      });
      //console.log(prevState.todos[0])
      //console.log(updatedTodos[0])
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const date = new Date();
    const hours = date.getHours();
    const name = "Abhay";

    const todoItems = this.state.todos.map(item => (
      <ToDoItems key={item.id} item={item} handleChange={this.handleChange} />
    ));

    let timeofDay;

    if (hours < 12 && hours >= 6) {
      timeofDay = "Morning";
    } else if (hours >= 12 && hours < 16) {
      timeofDay = "Afternoon";
    } else if (hours >= 16 && hours < 23) {
      timeofDay = "Evening";
    } else {
      timeofDay = "Night";
    }

    return (
      <div>
        <Header />
        <MainContent />

        <h1
          style={{
            color: "#FF8C00",
            backgroundColor: "#333",
            textAlign: "center"
          }}
        >
          {" "}
          Good {`${timeofDay} ${name}`}{" "}
        </h1>
        <div className="todo-list">{todoItems}</div>

        <Footer />
      </div>
    );
  }
}

export default App;
