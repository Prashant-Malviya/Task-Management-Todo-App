import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import TaskStatusCount from "../components/TaskStatusCount";
import TaskTable from "../components/TaskTable";
import { api_url } from "../api/api";

const TaskManagement = ({ searchQuery }) => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  // Fetching tasks from localStorage or API
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(api_url);
    const data = response.data;
    const initialTasks = data.slice(0, 20).map((task) => ({
      id: task.id,
      title: task.title,
      description: "No description",
      status: task.completed ? "Done" : "To Do",
    }));
    setTasks(initialTasks);
  };

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Filter tasks based on the selected status
  const filteredByStatusTasks =
    filterStatus === "All"
      ? tasks
      : tasks.filter((task) => task.status === filterStatus);

  // Filter tasks based on the search query from Navbar
  const filteredTasks = filteredByStatusTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-purple-300 p-5 mt-16">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent mb-4 text-center">
        Task Management
      </h1>

      <TaskForm setTasks={setTasks} tasks={tasks} />

      <TaskFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />

      <TaskStatusCount tasks={tasks} />

      <TaskTable tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskManagement;
