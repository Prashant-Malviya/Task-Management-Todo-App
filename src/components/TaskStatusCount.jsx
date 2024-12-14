import React from "react";

const TaskStatusCount = ({ tasks }) => {
  // Function to count tasks by status
  const countTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status).length;
  };

  return (
    <div className="mb-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold text-amber-500">To Do</h3>
        <p className="text-2xl">{countTasksByStatus("To Do")}</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold text-green-500">In Progress</h3>
        <p className="text-2xl">{countTasksByStatus("In Progress")}</p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold text-blue-500">Done</h3>
        <p className="text-2xl">{countTasksByStatus("Done")}</p>
      </div>
    </div>
  );
};

export default TaskStatusCount;
