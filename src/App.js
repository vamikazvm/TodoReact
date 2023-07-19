import {Routes,Route} from 'react-router-dom'
// import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import { Navbar } from './components/Navbar';


function App() {
  return (
<>
<Navbar/>
<Routes>
  <Route path='/' element ={<Form/>}/>
  <Route path = 'task-list'element={<Todo />}/>
</Routes>
</>
     );
}

export default App;
