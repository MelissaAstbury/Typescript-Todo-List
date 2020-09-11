import React, { useContext } from "react";

import Task from "../../components/Task/Task";
import { TaskContext, TaskObject } from "../../context/TaskContext/TaskContext";

type Props = {
  tasks: TaskObject[];
};

const TaskList: React.FC<Props> = () => {
  const { tasks } = useContext(TaskContext);
  console.log(tasks);
  return (
    <div className="task-list-container">
      {tasks.map((task: TaskObject) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
