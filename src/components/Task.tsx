import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import { format } from "date-fns";

export type Task = {
  id: number;
  text: string;
  day: Date;
  reminder: boolean;
};

type NewTask = {
  text: string;
  day: Date;
  reminder: boolean;
};

type Props = {
  task: Task;
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
      <p>
        {format(task.day, "PPP")} at {format(task.day, "HH:mm")}
      </p>
    </div>
  );
};

export default Task;
