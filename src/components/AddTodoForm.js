import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';



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

  AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
  };
  
  //Lesson-4.1
  function InputWithLabel(props) {
    // Component code...
  
  InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  };
  export default InputWithLabel;
  TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })).isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
  };
  export default TodoList;
  function TodoListItem(props) {
    // Component code...
  
  TodoListItem.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
  };
  
  export default TodoListItem;

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