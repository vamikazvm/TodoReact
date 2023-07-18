import React from 'react';
import './Todo.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {


  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    if (!newTodo.text || newTodo.text.trim() === '') {
      alert('Enter Task')
      return;
    } else {
      setTodos([...todos, newTodo])
      console.log(...todos)
    }
  }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        
        />
        <button type="submit">Add Todo</button>
       
        {/* <button type='submit' onClick={() => navigate('task-list')}>Add Todo</button> */}

      </form>
    )
  
}
export default Form
