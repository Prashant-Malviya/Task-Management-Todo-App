import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-purple-300 p-8 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent text-center mb-6">
        Welcome to the Task Management App
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-8">
        Manage your tasks efficiently and stay on top of your to-do list with
        our Task Management app. Add, filter, and search tasks with ease. Start
        by navigating to the To-Do page and organize your life today!
      </p>
      <button
        onClick={() => navigate("/todo")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
      >
        Go to To Do Page
      </button>
    </div>
  );
};

export default Home;
