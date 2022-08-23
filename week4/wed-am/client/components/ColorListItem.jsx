import React from 'react'

function ColorListItem(props) {
  const name = props.color
  const style = { color: name }

  return <li style={style}>{name}</li>
}

export default ColorListItem
