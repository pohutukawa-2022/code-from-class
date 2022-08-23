import React from 'react'
import Counter from './Counter'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('when the user clicks increase, counter is incremented by 1', () => {
  //ARRANGE
  render(<Counter />)
  const counter = screen.getByRole('heading')
  const button = screen.getByRole('button', { name: 'Increase' })

  expect(counter.textContent).toMatch('The current count is: 0')
  //ACT
  userEvent.click(button)
  //ASSERT
  expect(counter.textContent).toMatch('The current count is: 1')
  expect(counter.textContent).not.toMatch('The current count is: 0')
})

test('input changes intitial counter value', () => {
  render(<Counter />)
  const counter = screen.getByRole('heading')
  const input = screen.getByRole('textbox')

  expect(counter.textContent).toBe('The current count is: 0')

  userEvent.type(input, '6')

  expect(counter.textContent).toBe('The current count is: 6')
})
