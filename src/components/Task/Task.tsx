import React, { useContext } from "react";

import { TaskContext } from "../../context/TaskContext/TaskContext";
import { TaskObject } from "../../context/TaskContext/TaskContext";

type Props = {
  task: TaskObject;
};

const Task: React.FC<Props> = ({ task }) => {
  const { editTask, taskEdited } = useContext(TaskContext);
  return (
    <div>
      <p>Title: {task.name}</p>
      <button onClick={() => editTask(task.id)}>Edit</button>
      {taskEdited && taskEdited.id === task.id && (
        <>
          <input placeholder={task.name} />
          <button>Save edit</button>
        </>
      )}
      <button>Delete</button>
    </div>
  );
};

export default Task;
