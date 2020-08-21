import React from "react";
import "./App.css";
import TaskAdder from "./components/TaskAdder";
import ToDoList from "./components/ToDoList";

class App extends React.Component {
  state = {
    toDoList: [
      // {task: "feed fish"},
      // {task: "water plants"}
    ],
    completedList: [
      // {task: "take bins out"},
      // {task: "clean kitchen"}
    ],
  };
  addTask = (newTask) => {
    this.setState((currentState) => {
      return { toDoList: [newTask, ...currentState.toDoList] };
    });
  };
  removeTask = (task) => {
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
  render = () => {
    return (
      <div className="App">
        <header>
          <h1>get it done!</h1>
        </header>
        <main>
          <TaskAdder addTask={this.addTask} removeTask={this.removeTask} />
          <ToDoList
            toDoList={this.state.toDoList}
            completedList={this.state.completedList}
            removeTask={this.removeTask}
          />
        </main>
      </div>
    );
  };
}

export default App;
