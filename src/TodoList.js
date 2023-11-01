import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;