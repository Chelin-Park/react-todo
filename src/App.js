import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const todos = data.records.map((record) => ({
        id: record.id,
        title: record.fields.title,
      }));
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const addTodo = async (newTodo) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
      body: JSON.stringify({
        fields: {
          title: newTodo.title,
        },
      }),
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const createdTodo = {
        id: data.id,
        title: data.fields.title,
      };
      setTodoList([...todoList, createdTodo]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

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
