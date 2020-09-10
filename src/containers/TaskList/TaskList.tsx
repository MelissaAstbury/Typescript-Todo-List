import React from "react";

import Task from "../../components/Task/Task";
import { TaskObject } from "../../App";

type Props = {
  tasks: TaskObject[];
};

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <div className="task-list-container">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
