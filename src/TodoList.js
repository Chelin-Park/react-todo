import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map(({ id, todo }) => (
          <TodoListItem key={id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;