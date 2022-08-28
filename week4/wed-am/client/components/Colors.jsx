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
              <ColorListItem key={color} color={color} />
            </li>
          )
        })}
      </ul>

      <Link to="/colors/details">Show Details</Link>
      <Outlet />
    </>
  )
}

export default Colors
