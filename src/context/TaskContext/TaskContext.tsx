import React, { useState } from "react";
import { v4 } from "uuid";

export type TaskObject = {
  id: string;
  name: string;
};

interface ContextProps {
  tasks: TaskObject[];
  createTask: boolean;
  value: string;
  setValue: any;
  addTaskButton: any;
  submit: any;
  deleteTask: any;
  //   setValue: (e: React.MouseEvent<HTMLButtonElement>) => string;
  //   addTaskButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
  //   submit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  //   deleteTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TaskContext = React.createContext<ContextProps>({
  tasks: [
    { id: "0", name: "hair" },
    { id: "1", name: "nails" },
    { id: "2", name: "washing" },
    { id: "3", name: "cooking" },
  ],
  createTask: false,
  value: "",
  setValue: null,
  addTaskButton: null,
  submit: null,
  deleteTask: null,
});

const TaskContextProvider: React.FC = (props) => {
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
  };

  const submit = () => {
    let newObj = {
      id: v4(),
      name: value,
    };
    setTasks([...tasks, newObj]);
    setCreateTask(false);
  };

  const deleteTask = () => {};

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        value,
        addTaskButton,
        submit,
        deleteTask,
        setValue,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
