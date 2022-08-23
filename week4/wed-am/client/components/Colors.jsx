import React from 'react'

import ColorListItem from './ColorListItem'

function Colors(props) {
  return (
    <>
      <h2>Colours</h2>
      <ul>
        {props.colors.map((color) => (
          <ColorListItem key={color} color={color} />
        ))}
      </ul>
    </>
  )
}

export default Colors
