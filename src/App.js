import React from "react";
import "./App.css";
import TaskAdder from "./components/TaskAdder";
import ToDoList from "./components/ToDoList";
import CompletedList from "./components/CompletedList";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Get It Done!</h1>
      </header>
      <main>
        <TaskAdder />
        <ToDoList />
        <h2>Completed</h2>
        <CompletedList />
      </main>
    </div>
  );
};

export default App;
