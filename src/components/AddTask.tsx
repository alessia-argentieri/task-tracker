import { FC, useState, FormEventHandler } from "react";

type Props = {
  onAdd: (task: { text: string; day: string; reminder: boolean }) => void;
};

const AddTask: FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="form-label">Task</label>
        <input
          className="form-input"
          type="text"
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />
      </div>
      <div>
        <label className="form-label">Day & Time</label>
        <input
          className="form-input"
          type="text"
          placeholder="Add Day & Time"
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
      </div>
      <div className="form-check">
        <label className="form-label-check">Set Reminder</label>
        <input
          className="form-input-check form-input"
          type="checkbox"
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder}
        />
      </div>
      <input type="submit" value="Save task" className="btn-form" />
    </form>
  );
};

export default AddTask;
