import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload]
    },
    deleteTodo: (state, action) => {
      const arrayWithOutTheDeletedTodo = state.filter(
        (todo) => todo !== action.payload
      )
      return arrayWithOutTheDeletedTodo
    },
  },
})

export const { addTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer
