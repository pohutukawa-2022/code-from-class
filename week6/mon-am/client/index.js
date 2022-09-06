import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import todos from './slices/todos'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore({
    reducer: {
      todos,
    },
  })

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
