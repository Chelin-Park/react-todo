import React from "react";

function TodoListItem(props) {
  const { todo } = props;

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