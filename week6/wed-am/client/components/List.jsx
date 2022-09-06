import React, { useEffect } from 'react'

function List() {
  const films = [
    { id: 1, name: 'film1', quote: 'quote1' },
    { id: 2, name: 'film2', quote: 'quote2' },
  ]

  useEffect(async () => {
    // fetch your async actions here
  }, [])

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-evenly mt-5">
        {films.map((film) => (
          <div key={film.id} className="m-4 max-w-md">
            <div className="bg-slate-200 block rounded-lg shadow-lg  p-10">
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                {film.name}
              </h5>
              <p className="text-gray-700 text-base mb-4">{film.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
