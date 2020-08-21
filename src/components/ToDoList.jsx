import React from "react";

class ToDoList extends React.Component {
  state = { task: "" };
  handleClick = (clickEvent) => {
    const task = clickEvent.target.innerText.slice(2);
    this.setState(
      () => {
        return { task };
      },
      () => {
        const taskToRemove = { ...this.state };
        this.props.removeTask(taskToRemove);
      }
    );
  };
  render = () => {
    return (
      <section className="lists">
        <ul className="to-do-list">
          {this.props.toDoList.map((task, i) => {
            return (
              <li key={task.task} id={i} onClick={this.handleClick}>
                ☐ {task.task}{" "}
              </li>
            );
          })}
        </ul>
        <ul className="completed-list">
          {this.props.completedList.map((task) => {
            return <li key={task.task}>☑︎ {task.task}</li>;
          })}
        </ul>
      </section>
    );
  };
}

export default ToDoList;
