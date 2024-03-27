import { FC } from "react";
import { FaTimes } from "react-icons/fa";

type Props = {
  task: {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
  };
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const Task: FC<Props> = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
