import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h2>Welcome Home</h2>
      <Link to="/colors">Take me to the colours!</Link>
    </>
  )
}

export default Home
