import { FC, useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { NewTask, Task } from "./components/Task";

const App: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      text: "Buy gift for Sam",
      day: new Date(2024, 3, 7, 15, 30),
      reminder: true,
    },
    {
      id: 2,
      text: "Meet estate agent",
      day: new Date(2024, 3, 10, 17, 30),
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery shopping",
      day: new Date(2024, 3, 12, 7, 30),
      reminder: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(true);

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task: NewTask) => {
    const id = Math.floor(Math.random() * 100) + 1;

    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddForm={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h2 className="h2">
          No tasks to show. <br />
          Add a new task
        </h2>
      )}
    </div>
  );
};

export default App;
