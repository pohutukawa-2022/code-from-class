import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    //wrap App in <provider> to give everything in the App access to the store (not by default though, each component which wants to use global state needs to use useSelector)
    //Give Provider access to your store by including it as a prop
    <App />,
    document.getElementById('app')
  )
})
