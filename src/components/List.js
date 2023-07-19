import React from 'react'
import Todo from './Todo';

const List = ({ todos }) => {
  return (
    <div>
      <h1>Today's todos</h1>
      <Todo
        todos={todos}
      />
    </div>
  )
}

export default List