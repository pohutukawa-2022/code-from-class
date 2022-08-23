import React from 'react'
import { Link } from 'react-router-dom'

function Details() {
  return (
    <>
      <p>These are details</p>
      <Link to="/colors">Hide Details</Link>
    </>
  )
}

export default Details
