/* eslint-disable require-jsdoc */
import React from 'react';
import './Todo.css';
import Form from './Form';

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState('');
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState('');
  // Add tasks
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    if (!newTodo.text || newTodo.text.trim() === '') {
      alert('Enter Task');
      return;
    } else {
      setTodos([...todos, newTodo]);
      console.log(...todos);
    }
  }

  // Delete tasks
  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  // Complete tasks
  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  // Edit Task
  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
            <input
              type="text"
              onChange={(e) => setEditingText(e.target.value)}
            />
            ) : (
                <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
                <button onClick={() => submitEdits(todo.id)}>
                    Submit Edits
                </button>
            ) : (
                <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
