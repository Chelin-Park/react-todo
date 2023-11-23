import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todoTitle);
    setTodoTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        id="todoTitle"
        label="Title"
        value={todoTitle}
        onChange={handleTitleChange}
        type="text"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;