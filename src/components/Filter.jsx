import React from 'react';

export default function Filter({ current, onChange }) {
  return (
    <div className="btn-group mb-3">
      {['all', 'Completed List', 'Pending List'].map(type => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`btn btn-${current === type ? 'primary' : 'outline-primary'}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}