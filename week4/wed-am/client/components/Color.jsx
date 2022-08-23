import React from 'react'
import { useParams } from 'react-router-dom'

function Color() {
  const { colorName } = useParams()
  const style = { color: colorName }

  return <p style={style}>{colorName}</p>
}

export default Color
