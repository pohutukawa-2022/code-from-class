<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFilms } from '../slices/films.js'

function List() {

  const dispatch = useDispatch()
  const films = useSelector(state => state.films)

  useEffect(async () => {
    // fetch your async actions here
    dispatch(fetchFilms())

=======
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilms } from '../apis/api'
import { fetchFilms } from '../slices/films'

function List() {
  const dispatch = useDispatch()
  const films = useSelector((state) => state.films)
  // const [films, setFilms] = useState([])

  useEffect(async () => {
    // fetch your async actions here
    await dispatch(fetchFilms())

    // week 5, the old method
    // const newFilms = await getFilms()
    // setFilms(newFilms)
>>>>>>> 29f1a74a921e8fe1bc26dac3fc87575db7cbbac9
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
