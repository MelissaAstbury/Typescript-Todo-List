import React from "react";

type Props = {
  task: string;
};

const Task: React.FC<Props> = ({ task }) => {
  console.log(task);
  return (
    <div>
      <p>Task: {task}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Task;
