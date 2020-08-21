import React from "react";

const ToDoList = (props) => {
  return (
    <ul>
      {props.toDoList.map((task) => {
        return <li key={task.task}>{task.task}</li>;
      })}
    </ul>
  );
};

export default ToDoList;
