import React from "react";

class TaskAdder extends React.Component {
  state = { task: "" };
  handleChange = (changeEvent) => {
    const task = changeEvent.target.value;
    this.setState(() => {
      return { task };
    });
  };
  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const newTask = { ...this.state };
    if (newTask.task.length > 0) this.props.addTask(newTask);
    this.setState(() => {
      return { task: "" };
    });
  };
  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task:{" "}
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          ></input>
        </label>

        <label>
          <button type="submit">add</button>
        </label>
      </form>
    );
  };
}

export default TaskAdder;
