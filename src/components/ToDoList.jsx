import React from "react";

class ToDoList extends React.Component {
  state = { task: "" };
  handleClickToComplete = (clickEvent) => {
    const task = clickEvent.target.innerText.slice(2);
    this.setState(
      () => {
        return { task };
      },
      () => {
        const taskToComplete = { ...this.state };
        this.props.markTaskComplete(taskToComplete);
      }
    );
  };
  handleClickToReAdd = (clickEvent) => {
    const task = clickEvent.target.innerText.slice(3);
    this.setState(
      () => {
        return { task };
      },
      () => {
        const taskToReAdd = { ...this.state };
        this.props.reAddTask(taskToReAdd);
      }
    );
  };
  render = () => {
    return (
      <section className="lists">
        <ul className="to-do-list">
          {this.props.toDoList.map((task, i) => {
            return (
              <li key={task.task} onClick={this.handleClickToComplete}>
                ☐ {task.task}
              </li>
            );
          })}
        </ul>
        <ul className="completed-list">
          {this.props.completedList.map((task) => {
            return (
              <li key={task.task} onClick={this.handleClickToReAdd}>
                ☑︎ {task.task}
              </li>
            );
          })}
        </ul>
      </section>
    );
  };
}

export default ToDoList;
