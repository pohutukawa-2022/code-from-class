import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { fetchPokemon } from '../api/api'

function App() {
  const [pokemonData, setPokemonData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userInput, setUserInput] = useState('')
  const [pokemon, setPokemon] = useState('pikachu')

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetchPokemon(pokemon)
        .then((res) => {
          setPokemonData(res.body)
        })
        .finally(() => {
          setLoading(false)
        })
        .catch((err) => {
          console.error(err.message)
        })
    }, 1500)
  }, [pokemon])

  function handleChange(event) {
    setUserInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setPokemon(userInput)
  }

  return (
    <>
      <h2 className="catch">Gottta Catch Em All!</h2>
      <img src="../pokemon.png"></img>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={`Front sprite of ${pokemonData.name}`}
          />
          <img
            src={pokemonData.sprites.back_default}
            alt={`Back sprite of ${pokemonData.name}`}
          />
          <h3>Abilities</h3>
          <ul>
            {pokemonData.abilities.map((abilityObj, index) => {
              console.log(abilityObj)
              return <li key={index}>{abilityObj.ability.name}</li>
            })}
          </ul>
        </>
      )}

      <form>
        <label>Which Pokemon would you like to see? </label>
        <input
          type="text"
          name="pokemon"
          onChange={handleChange}
          value={userInput}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Go!
        </button>
      </form>
    </>
  )
}

export default App
