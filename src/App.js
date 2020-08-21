import React from "react";
import "./App.css";
import TaskAdder from "./components/TaskAdder";
import ToDoList from "./components/ToDoList";
import CompletedList from "./components/CompletedList";

class App extends React.Component {
  state = {
    toDoList: [
      // {task: "feed fish"},
      // {task: "water plants"}
    ],
  };
  addTask = (newTask) => {
    this.setState((currentState) => {
      return { toDoList: [newTask, ...currentState.toDoList] };
    });
  };
  render = () => {
    return (
      <div className="App">
        <header>
          <h1>Get It Done!</h1>
        </header>
        <main>
          <TaskAdder addTask={this.addTask} />
          <ToDoList toDoList={this.state.toDoList} />
          <h2>Completed</h2>
          <CompletedList />
        </main>
      </div>
    );
  };
}

export default App;
