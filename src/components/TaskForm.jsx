import React, { useState } from "react";
import toast from "react-hot-toast";

const TaskForm = ({ setTasks, tasks }) => {
  const [taskInput, setTaskInput] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  // Add Task
  const addTask = () => {
    if (!taskInput.title || !taskInput.description) return alert("All fields are required!");
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title: taskInput.title,
      description: taskInput.description,
      status: taskInput.status,
    };
    setTasks([...tasks, newTask]);
    setTaskInput({ title: "", description: "", status: "To Do" });

    toast.success("Task added successfully!");
  };

  return (
    <div className="bg-gray-800 text-white p-5 rounded-lg mb-5">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          value={taskInput.title}
          onChange={(e) => setTaskInput({ ...taskInput, title: e.target.value })}
          placeholder="Title"
          className="px-3 py-2 rounded text-black"
        />
        <input
          type="text"
          value={taskInput.description}
          onChange={(e) => setTaskInput({ ...taskInput, description: e.target.value })}
          placeholder="Description"
          className="px-3 py-2 rounded text-black"
        />
        <select
          value={taskInput.status}
          onChange={(e) => setTaskInput({ ...taskInput, status: e.target.value })}
          className="px-3 py-2 rounded text-black"
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <button
          onClick={addTask}
          className="col-span-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
