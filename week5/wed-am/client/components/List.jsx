import React from 'react'

const initial = [
  { id: 1, name: 'Rust' },
  { id: 2, name: 'F#' },
  { id: 3, name: 'Brainfuck' },
]

function List() {
  return (
    <section>
      <ul>
        {initial.map((lang) => (
          <li key={lang.id}>
            <p>{lang.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List
