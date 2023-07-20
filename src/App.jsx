/* eslint-disable react/react-in-jsx-scope */
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import {Navbar} from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element ={<Form />} />
      <Route path = 'task-list'element={<Todo />} />
    </Routes>
  </>
);

export default App;
