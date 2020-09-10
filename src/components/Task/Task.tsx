import React from "react";
import { TaskObject } from "../../App";

type Props = {
  task: TaskObject;
};

const Task: React.FC<Props> = ({ task }) => {
  return (
    <div>
      <p>Title: {task.name}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Task;
