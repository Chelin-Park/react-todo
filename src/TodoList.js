import React from 'react';

function TodoList() {
  const todoList = [
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
    { id: 3, title: 'Todo 3' }
  ];

  return (
    <div>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;