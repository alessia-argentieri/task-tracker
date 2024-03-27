import { FC } from "react";
import Task from "./Task";

type Props = {
  tasks: {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
  }[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const Tasks: FC<Props> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
