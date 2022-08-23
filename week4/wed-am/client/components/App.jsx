import React from 'react'

import Home from './Home'
import Title from './Title'
import Color from './Color'
import Colors from './Colors'
import Details from './Details'
import { Route, Routes } from 'react-router-dom'

const colorsData = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
]

function App() {
  return (
    <>
      <h1>Client-side routing FTW!</h1>
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colors" element={<Colors colors={colorsData} />}>
          <Route path=":details" element={<Details />} />
        </Route>
        <Route path="/color/:colorName" element={<Color />} />
      </Routes>
    </>
  )
}

export default App
