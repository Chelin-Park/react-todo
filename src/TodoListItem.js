import React from "react";
import style from './TodoListItem.module.css';

function TodoListItem({ todo, onRemoveTodo }) {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <div>
      <li className={style.ListItem}>
        {/* Your JSX code for the list item */}
        {todo.title}
        <button type="button" onClick={handleRemoveClick}>Remove</button>
      </li>
    </div>
  );
}

export default TodoListItem;
