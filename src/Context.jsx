/* eslint-disable react/prop-types */
import React, {useState, createContext} from 'react';

export const cont = createContext();

const Context = ({children}) => {
  const [todos, setTodos] = useState([]);

  const updateState = (value) => {
    setTodos(value);
  };

  return (
    <cont.Provider value={{todos, updateState}}>
      {children}
    </cont.Provider>
  );
};

export default Context;
