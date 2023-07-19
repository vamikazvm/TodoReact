import React, { useState,createContext } from 'react'

export const cont = createContext()

const Context = ({children}) => {
const [todos, setTodos] = useState([]);

  return (
    <cont.Provider value={{ todos, setTodos }}>
            {children}
        </cont.Provider>
  )
}

export default Context