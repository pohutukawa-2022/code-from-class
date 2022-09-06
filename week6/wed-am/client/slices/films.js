import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addNewFilm, getFilms } from '../apis/api'

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
  const films = await getFilms()
  return films
})

// we want to get the state from the back end, my source of truth is in the back end 

export const postNewFilm = createAsyncThunk('films/postNewFilm', async (newFilm) => {
  await addNewFilm(newFilm)
})

const slice = createSlice({
  name: 'films',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchFilms.fulfilled]: (state, { payload }) => {
      return payload
    },
    // [postNewFilm.fulfilled]:(state, action) =>

  }
}
  // fetchFilms: async (state, action) => {
  //   const films = await getFilms()
  //   return films
  // }
  // this impure method is wrong and we need to use createAsyncThunkexpo

)

export default slice.reducer
