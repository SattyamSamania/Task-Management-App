const express = require('express');
const app = express();
const PORT = 4000;

// Mock data for tasks
const tasks = [
  { id: 1, name: 'Task 1', description: 'Brainstorming, Research and Wireframes', status: 'todo' },
  { id: 2, name: 'Task 2', description: 'Onboarding Illustrations and Moodboard', status: 'inprocess' },
  { id: 3, name: 'Task 3', description: 'Mobile App Design and Design System', status: 'done' }
];

// Endpoint to retrieve all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Endpoint to retrieve tasks based on status
app.get('/tasks/:status', (req, res) => {
  const status = req.params.status.toLowerCase();
  const filteredTasks = tasks.filter(task => task.status === status);
  res.json(filteredTasks);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
