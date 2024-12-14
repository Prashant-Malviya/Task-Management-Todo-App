# Task Manager

This project is a simple **Task Manager** application built using **React.js**. The app allows users to manage tasks by adding, editing, deleting, and filtering tasks based on their status. The application features a responsive user interface to ensure usability across devices of different screen sizes.

## Deployed Link:- https://task-manager-by-prashant-malviya.netlify.app/

---

## Features

- **Add Tasks**: Users can create new tasks by providing a title, description, and status.
- **Edit Tasks**: Inline editing of tasks directly within the table.
- **Delete Tasks**: Remove tasks easily with a single click.
- **Filter Tasks**: Filter tasks based on their current status ("To Do", "In Progress", "Done").
- **Responsive Design**: Fully responsive UI for small and large screens.
- **Dynamic Table**: Integrated using the Tabulator library for efficient data handling.
- **Notifications**: Success messages for task actions using `react-hot-toast`.

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Table Management**: Tabulator.js
- **Notifications**: react-hot-toast
- **Styling**: Tailwind CSS for responsive design

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/task-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The application will be accessible at `http://localhost:3000`.

---

## Project Structure

```
.
├── public
├── src
│   ├── components
│   │   ├── TaskForm.jsx       # Component to add tasks
│   │   ├── TaskTable.jsx      # Component to display tasks in a table
│   ├── App.jsx               # Main application file
│   ├── index.js              # React entry point
├── package.json
├── README.md
```

---

## Usage

1. **Adding Tasks**:
   - Enter a task title and description in the form.
   - Select a status (default is "To Do").
   - Click the "Add Task" button.

2. **Editing Tasks**:
   - Double-click a cell in the "Title" or "Description" columns to edit the content.
   - Change the task's status via the dropdown in the "Status" column.

3. **Deleting Tasks**:
   - Click the cross button in the "Delete" column to remove a task.

4. **Responsive Behavior**:
   - On small screens, the table collapses less critical columns for better usability. Collapsed data can be accessed by expanding rows.

---

## Challenges and Solutions

1. **Handling Inline Editing**:
   - Used Tabulator's `editor` functionality to enable inline editing of task fields.

2. **Responsive Table**:
   - Configured Tabulator with `responsiveLayout: "collapse"` and prioritized columns using the `responsive` property.

3. **State Management**:
   - Managed tasks using React's `useState` and ensured updates are reflected dynamically in the table.

4. **ID Management on Deletion**:
   - Reassigned task IDs after deletions to maintain consistency.

---


## Acknowledgements

- [React.js](https://reactjs.org/)
- [Tabulator](http://tabulator.info/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-hot-toast](https://react-hot-toast.com/)
