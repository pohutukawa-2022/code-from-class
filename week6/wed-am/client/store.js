import { configureStore } from '@reduxjs/toolkit'
import films from './slices/films'
import indicator from './slices/indicator'

const store = configureStore({
  reducer: {
    films,
    indicator,
  },
})

export default store
