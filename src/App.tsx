import React, { useState } from "react";
import "./App.scss";

import TaskList from "./containers/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState(["hair", "nails", "washing", "cooking"]);
  const [createTask, setCreateTask] = useState(false);

  const addTaskButton = () => {
    if (createTask === false) {
      setCreateTask(true);
    } else {
      return setCreateTask(false);
    }
  };

  const editTask = () => {};

  const deleteTask = () => {};

  return (
    <div className="App">
      <h1>My Todo-List</h1>
      <button onClick={addTaskButton}>Add new task</button>
      {createTask && <input type="text" placeholder="Add new task here..." />}

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
