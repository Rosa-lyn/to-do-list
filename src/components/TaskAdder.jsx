import React from "react";

const TaskAdder = (props) => {
  return (
    <form>
      <label>
        Task: <input></input>
      </label>
      <label>
        Due date: <input></input>
      </label>
      <label>
        <button>add</button>
      </label>
    </form>
  );
};

export default TaskAdder;
