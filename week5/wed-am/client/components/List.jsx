<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { fetchLanguages } from '../api'
=======
import React, { useEffect , useState } from 'react'
import { fetchLanguages } from '../api';


>>>>>>> 7f626348fbd35098d6777d67972ddc2a20c94484

function List() {
  const [langs, setLangs] = useState([])

  useEffect(() => {
<<<<<<< HEAD
    fetchLanguages()
      .then((languages) => {
        console.log(languages)
        setLangs(languages)
      })
      .catch((err) => {
        console.error(err)
      })
=======
    fetchLanguages().then(languages => {
      setLangs(languages)
    })
    .catch(err => {
      console.error(err);
    })
>>>>>>> 7f626348fbd35098d6777d67972ddc2a20c94484
  }, [])

  return (
    <section>
      <ul>
        {langs.map((lang) => (
          <li key={lang.id}>
            <p>{lang.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List
