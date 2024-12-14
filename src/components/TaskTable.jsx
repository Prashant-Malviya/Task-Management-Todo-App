import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";

const TaskTable = ({ tasks, setTasks }) => {
  const tableRef = useRef(null);

  // Initialize Tabulator table
  useEffect(() => {
    if (tasks.length > 0) {
      const table = new Tabulator(tableRef.current, {
        data: tasks,
        layout: "fitColumns",
        columns: [
          { title: "ID", field: "id", width: 70, hozAlign: "center", headerSort: false },
          {
            title: "Title",
            field: "title",
            editor: "input",
          },
          {
            title: "Description",
            field: "description",
            editor: "input",
          },
          {
            title: "Status",
            field: "status",
            editor: "select",
            editorParams: { values: ["To Do", "In Progress", "Done"] },
          },
          {
            title: "Delete",
            formatter: "buttonCross",
            hozAlign: "center",
            width: 100,
            cellClick: (e, cell) => deleteTask(cell.getRow().getData().id),
          },
        ],
      });

      table.setData(tasks);
    }
  }, [tasks]);

  // Delete Task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    
    const reAssignedTasks = updatedTasks.map((task, index) => ({
      ...task,
      id: index + 1, 
    }));

    
    setTasks(reAssignedTasks);

    toast.success("Task deleted successfully!");
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <div ref={tableRef}></div>
    </div>
  );
};

export default TaskTable;
