import React from "react";

import Task from "../../components/Task/Task";

type Props = {
  tasks: string[];
};

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <div className="task-list-container">
      {tasks.map((task) => {
        return <Task key={task} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
