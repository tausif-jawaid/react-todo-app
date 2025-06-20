import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';
import { toast } from 'react-toastify';

const LOCAL_STORAGE_KEY = 'todos';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

 useEffect(() => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) {
    setTodos(JSON.parse(stored));
  }
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
    toast.success("Task added successfully");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
    if (confirmDelete) {
      setTodos(prev => {
        const updated = prev.filter(todo => todo.id !== id);
        toast.success("Task deleted successfully");
        return updated;
      });
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Completed List') return todo.completed;
    if (filter === 'Pending List') return !todo.completed;
    return true;
  });

  return (
    <div className="card p-3">
      <AddTodo onAdd={addTodo} />
      <Filter current={filter} onChange={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}