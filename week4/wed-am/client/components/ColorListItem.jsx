import React from 'react'
import { Link } from 'react-router-dom'

function ColorListItem(props) {
  const name = props.color
  const style = { color: name }

  return (
    <Link style={style} to={`/color/${name}`}>
      {name}
    </Link>
  )
}

export default ColorListItem
