import React, { useContext } from "react";
import "./App.scss";

import { TaskContext } from "./context/TaskContext/TaskContext";
import TaskList from "./containers/TaskList/TaskList";

// interface Props {
//   onClick: () => void;
//   createTask: boolean;
//   value: string;
//   setValue: Function;
//   addTaskButton: Function;
//   submit: Function;
//   deleteTask: Function;
// }

const App: React.FC = ({}) => {
  const { tasks, submit, addTaskButton, createTask, setValue } = useContext(
    TaskContext
  );

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
};

export default App;
