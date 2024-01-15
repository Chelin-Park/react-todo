import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
          },
        });
      }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div style={{ textAlign: 'center' }}>
            <h1>Todo List</h1>
            {isLoading ? <p>Loading...</p> : null}
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            <AddTodoForm onAddTodo={addTodo} />
          </div>
        } />
        {/* (1) */}
        <Route path="/new" element={
          <div style={{ textAlign: 'center' }}>
            <h1>New Todo List</h1>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
