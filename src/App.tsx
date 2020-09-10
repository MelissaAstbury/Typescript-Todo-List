import React, { useState } from "react";
import { v4 } from "uuid";
import "./App.scss";

import TaskList from "./containers/TaskList/TaskList";

export type TaskObject = {
  id: string;
  name: string;
};

function App() {
  const [tasks, setTasks] = useState<TaskObject[]>([
    { id: "0", name: "hair" },
    { id: "1", name: "nails" },
    { id: "2", name: "washing" },
    { id: "3", name: "cooking" },
  ]);
  const [createTask, setCreateTask] = useState(false);
  const [value, setValue] = useState("");

  const addTaskButton = () => {
    setCreateTask(!createTask);
    // if (createTask === false) {
    //   setCreateTask(true);
    // } else {
    //   return setCreateTask(false);
    // }
  };

  const submit = () => {
    let newObj = {
      id: v4(),
      name: value,
    };
    setTasks([...tasks, newObj]);
    setCreateTask(false);
  };

  const editTask = () => {};

  const deleteTask = () => {};

  return (
    <div className="App">
      <h1>My Todo-List</h1>
      <button onClick={addTaskButton}>Add new task</button>
      {createTask && (
        <>
          <input
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            type="text"
            placeholder="Add new task here..."
          />
          <button onClick={submit}>Submit</button>
        </>
      )}

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
