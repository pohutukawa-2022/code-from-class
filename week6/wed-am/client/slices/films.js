import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addNewFilm, getFilms } from '../apis/api'

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
  const films = await getFilms()
  return films
})

export const postNewFilm = createAsyncThunk(
  'films/postNewFilm',
  async (newFilm) => {
    await addNewFilm(newFilm)
  }
)

const slice = createSlice({
  name: 'films',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchFilms.fulfilled]: (state, action) => {
      return action.payload
    },
    // [postNewFilm.fulfilled]: (state, action) => {},
  },
})

export default slice.reducer
