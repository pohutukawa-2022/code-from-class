import React from 'react'
import { useSelector } from 'react-redux'
import Form from './Form'
import Indicator from './Indicator'
import List from './List'

function App() {
  const waiting = useSelector((state) => state.indicator)

  return (
    <div className="relative min-h-screen flex-col items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover">
      { waiting && <Indicator /> }
      <Form />
      <List />
    </div>
  )
}

export default App
