import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addNewFilm, getFilms } from '../apis/api'

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
  const films = await getFilms()
  return films
})

<<<<<<< HEAD
// we want to get the state from the back end, my source of truth is in the back end 

export const postNewFilm = createAsyncThunk('films/postNewFilm', async (newFilm) => {
  await addNewFilm(newFilm)
})
=======
export const postNewFilm = createAsyncThunk(
  'films/postNewFilm',
  async (newFilm) => {
    await addNewFilm(newFilm)
  }
)
>>>>>>> 29f1a74a921e8fe1bc26dac3fc87575db7cbbac9

const slice = createSlice({
  name: 'films',
  initialState: [],
  reducers: {},
  extraReducers: {
<<<<<<< HEAD
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
=======
    [fetchFilms.fulfilled]: (state, action) => {
      return action.payload
    },
    // [postNewFilm.fulfilled]: (state, action) => {},
  },
})
>>>>>>> 29f1a74a921e8fe1bc26dac3fc87575db7cbbac9

export default slice.reducer
