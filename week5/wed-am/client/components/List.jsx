import React, { useEffect , useState } from 'react'
import { fetchLanguages } from '../api';



function List() {
  const [langs, setLangs] = useState([])

  useEffect(() => {
    fetchLanguages().then(languages => {
      setLangs(languages)
    })
    .catch(err => {
      console.error(err);
    })
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
