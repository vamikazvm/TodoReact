import React, { useState, useContext } from 'react';
import './Todo.css';
import { useNavigate } from 'react-router-dom';
import { cont } from '../Context';



const Form = () => {

  const { todos, setTodos } = useContext(cont)
  const [todo, setTodo] = React.useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(e);
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    // if (!newTodo.text || newTodo.text.trim() === '') {
    //   alert('Enter Task')
    //   return;
    // } else 

    setTodos([...todos, newTodo])
    // console.log(...todos)
    if (!todo) {
      setMessage('Please enter task.');
      setTimeout(() => setMessage(''), 2000);
      
      return;

    };
    
  }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}

        />
        <button type="submit">Add Todo</button>
        <div>
            {!!message && <span>{message}</span>}
          </div>

      </form>
    )

  }
  export default Form
