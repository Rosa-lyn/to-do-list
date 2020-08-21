import React from "react";
import "./App.css";
import TaskAdder from "./components/TaskAdder";
import ToDoList from "./components/ToDoList";

class App extends React.Component {
  state = {
    toDoList: [],
    completedList: [],
  };
  addTask = (newTask) => {
    this.setState((currentState) => {
      return { toDoList: [newTask, ...currentState.toDoList] };
    });
  };
  markTaskComplete = (task) => {
    const taskToRemove = task.task;
    this.setState((currentState) => {
      const toDoListCopy = currentState.toDoList.filter((task) => {
        return task.task !== taskToRemove;
      });
      return {
        toDoList: toDoListCopy,
        completedList: [task, ...currentState.completedList],
      };
    });
  };
  reAddTask = (task) => {
    const taskToReAdd = task.task;
    this.setState((currentState) => {
      const completedListCopy = currentState.completedList.filter((task) => {
        return task.task !== taskToReAdd;
      });
      return {
        toDoList: [task, ...currentState.toDoList],
        completedList: completedListCopy,
      };
    });
  };
  render = () => {
    return (
      <div className="App">
        <header>
          <h1>get it done!</h1>
        </header>
        <main>
          <TaskAdder
            addTask={this.addTask}
            markTaskComplete={this.markTaskComplete}
          />
          <ToDoList
            toDoList={this.state.toDoList}
            completedList={this.state.completedList}
            markTaskComplete={this.markTaskComplete}
            reAddTask={this.reAddTask}
          />
        </main>
      </div>
    );
  };
}

export default App;
