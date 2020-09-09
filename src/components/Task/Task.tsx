import React from "react";

type Props = {
  task: string;
};

const Task: React.FC<Props> = ({ task }) => {
  return (
    <div>
      <p>Title: {task}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default Task;
