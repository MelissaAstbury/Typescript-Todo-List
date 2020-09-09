import React, { useState } from "react";
import "./App.scss";

import TaskList from "./containers/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState(["hair", "nails", "washing", "cooking"]);

  const addTask = () => {};

  const editTask = () => {};

  const deleteTask = () => {};

  return (
    <div className="App">
      <h1>My Todo-List</h1>
      <button onClick={addTask}>Add new task</button>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
