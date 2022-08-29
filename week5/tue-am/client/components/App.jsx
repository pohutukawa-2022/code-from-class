import React from 'react'

function App() {
  return (
    <>
      <h2 className="catch">Gottta Catch Em All!</h2>
      <img src="../pokemon.png"></img>

      <form>
        <label>Which Pokemon would you like to see? </label>
        <input type="text" name="pokemon"></input>
        <button type="submit">Go!</button>
      </form>
    </>
  )
}

export default App
