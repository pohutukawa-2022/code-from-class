import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import ColorListItem from './ColorListItem'

function Colors(props) {
  return (
    <>
      <h2>Colours</h2>
      <ul>
        {props.colors.map((color) => {
          const style = { color: color }
          return (
            <li key={color} style={style}>
<<<<<<< HEAD
              <ColorListItem key={color} color={color} />
=======
              <ColorListItem color={color} />
>>>>>>> 5cbc74233e56cbe1cc02abedf98310783c5590fa
            </li>
          )
        })}
      </ul>
<<<<<<< HEAD

=======
>>>>>>> 5cbc74233e56cbe1cc02abedf98310783c5590fa
      <Link to="/colors/details">Show Details</Link>
      <Outlet />
    </>
  )
}

export default Colors
