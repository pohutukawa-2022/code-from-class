import reducer from './todos'

test('addTodo should add a new element to the state', () => {
  const actual = reducer([], { type: 'todos/addTodo', payload: 'eat' })
  expect(actual).toEqual(['eat'])
})

test('deleteTodo should remove an element from the state', () => {
  const actual = reducer(['eat'], { type: 'todos/deleteTodo', payload: 'eat' })
  expect(actual).toEqual([])
})
