import { FC, useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App: FC = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Buy gift for Sam",
      day: "2024-04-07",
      reminder: true,
    },
    {
      id: 2,
      text: "Meet estate agent",
      day: "2024-04-10",
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery shopping",
      day: "2024-04-12",
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

  const addTask = (task: { text: string; day: string; reminder: boolean }) => {
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
