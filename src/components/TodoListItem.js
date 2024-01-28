import React from "react";
<<<<<<< HEAD
import style from "./TodoListItem.module.css";
<li className={style.ListItem}>...</li>
=======
import style from './TodoListItem.module.css';
>>>>>>> 33eac0ad1aff5967b1f1ec74b1ab934b79b49b2c

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
