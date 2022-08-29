import React from 'react'

function Loader() {
  return (
    <div className="loader">
      <span className="loader-middle"></span>
    </div>
  )
}

export default Loader

{
  /*  code for App.jsx
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
        </> */
}
