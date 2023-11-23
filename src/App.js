import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: [] } });
      }, 2000);
    }).then((response) => {
      setTodoList(response.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      {isLoading ? <p>Loading...</p> : null}
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      <AddTodoForm onAddTodo={addTodo} />
    </div>
  );
}

export default App;
