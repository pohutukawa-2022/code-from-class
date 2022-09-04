import React from 'react'

function Words() {
  const todos = [
    { id: 1, text: 'Learn redux toolkit' },
    { id: 2, text: 'eat' },
    { id: 3, text: 'sleep' },
  ]

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.text}>
          {todo.id}: {todo.text}
        </li>
      ))}
    </ul>
  )
}

export default Words
