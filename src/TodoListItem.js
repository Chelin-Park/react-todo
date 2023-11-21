import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <div>
      <li>
        {/* Your JSX code for the list item */}
        {todo.title}
        <button type="button" onClick={handleRemoveClick}>Remove</button>
      </li>
    </div>
  );
}

export default TodoListItem;