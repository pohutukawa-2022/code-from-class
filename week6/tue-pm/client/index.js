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
    //wrap App in <provider> to give everything in the App access to the store (not by default though, each component which wants to use global state needs to use useSelector)
    //Give Provider access to your store by including it as a prop
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
