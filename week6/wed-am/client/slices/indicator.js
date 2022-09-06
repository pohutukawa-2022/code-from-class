import { createSlice } from '@reduxjs/toolkit'
import { fetchFilms, postNewFilm } from './films'

const slice = createSlice({
  name: 'indicator',
  initialState: false,
  extraReducers: {
    [fetchFilms.pending || postNewFilm.pending]: () => true,
    [fetchFilms.fulfilled || postNewFilm.fulfilled]: () => false,
  }

  // we don't have reducers yet, doing it in lecture 
})

export default slice.reducer
