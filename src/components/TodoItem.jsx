import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        className={`flex-grow-1 cursor-pointer ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        {todo.text}
      </span>
      <button className="btn btn-sm btn-danger  ms-2 mx-2" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
      <button className={`${todo.completed ? 'btn btn-sm btn-secondary' : 'btn btn-sm btn-danger'}`} onClick={() => onToggle(todo.id)}>
       {todo.completed ? "incomplete" : "complete"}
      </button>
    </li>
  );
}