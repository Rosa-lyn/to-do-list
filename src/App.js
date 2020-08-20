import React from "react";
import "./App.css";
import TaskAdder from "./components/TaskAdder";
import ToDoList from "./components/ToDoList";
import CompletedList from "./components/CompletedList";

class App extends React.Component {
  state = { toDoList: [] };
  addTask = (newTask) => {
    this.setState((currentState) => {
      // console.dir([newTask, ...currentState.toDoList);
      return { toDoList: [newTask, ...currentState.toDoList] };
    });
    console.dir(this.state);
  };
  render = () => {
    return (
      <div className="App">
        <header>
          <h1>Get It Done!</h1>
        </header>
        <main>
          <TaskAdder addTask={this.addTask} />
          <ToDoList />
          <h2>Completed</h2>
          <CompletedList />
        </main>
      </div>
    );
  };
}

export default App;
