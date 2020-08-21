import React from "react";

const ToDoList = (props) => {
  return (
    <ul className="to-do-list">
      {props.toDoList.map((task) => {
        return <li key={task.task}>☐ {task.task}</li>;
      })}
    </ul>
  );
};

export default ToDoList;
