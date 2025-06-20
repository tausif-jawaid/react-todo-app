import React from 'react';
import TodoApp from './components/TodoApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">To-Do List</h1>
      <TodoApp />
      <ToastContainer position="top-right" autoClose={2000} newestOnTop closeOnClick />
    </div>
  );
}