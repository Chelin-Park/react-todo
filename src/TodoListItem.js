import React from "react";

function TodoListItem({ todo }) {
  return (
    <div>
      <li>
        {/* Your JSX code for the list item */}
        {todo.title}
      </li>
    </div>
  );
}

export default TodoListItem;