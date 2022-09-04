import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteTodo } from '../slices/todos'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  function handleDelete(todo) {
    dispatch(deleteTodo(todo))    
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>
          <section>
            {todo}
            <button onClick={() => handleDelete(todo)}>X</button>
          </section>
        </li>
      ))}
    </ul>
  )
}

export default Todos
