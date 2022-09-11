import { createSlice } from '@reduxjs/toolkit'
import { fetchFilms, postNewFilm } from './films'

const slice = createSlice({
  name: 'indicator',
  initialState: false,
  extraReducers: {
    [fetchFilms.pending || postNewFilm.pending]: () => true,
    [fetchFilms.fulfilled || postNewFilm.fulfilled]: () => false,
<<<<<<< HEAD
  }

  // we don't have reducers yet, doing it in lecture 
=======
  },
>>>>>>> 29f1a74a921e8fe1bc26dac3fc87575db7cbbac9
})

export default slice.reducer
