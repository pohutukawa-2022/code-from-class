import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      //  pure js logic
      return [...state, action.payload]
    },
    deleteTodo: (state, action) => {
      // console.log(action.payload)
      const arr = state.filter((todo) => todo !== action.payload)
      return arr
    },
  },
})

export const { addTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer
