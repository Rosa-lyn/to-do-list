import React from "react";

class TaskAdder extends React.Component {
  state = { task: "" };
  handleChange = (changeEvent) => {
    const task = changeEvent.target.value;
    console.log(task);
    this.setState((currentState) => {
      return { task };
    });
  };
  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const newTask = { ...this.state };
    this.props.addTask(newTask);
    // console.log(task);
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
          <button>add</button>
        </label>
      </form>
    );
  };
}

export default TaskAdder;
