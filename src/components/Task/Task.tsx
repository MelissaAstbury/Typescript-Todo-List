import React from "react";
import { TaskObject } from "../../context/TaskContext/TaskContext";

type Props = {
  task: TaskObject;
};

const Task: React.FC<Props> = ({ task }) => {
  const editTask = () => {
    console.log(task);
  };

  return (
    <div>
      <p>Title: {task.name}</p>
      <button onClick={editTask}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Task;
