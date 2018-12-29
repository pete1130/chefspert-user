import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import css from './styles/style.styl'
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
import store from './store'

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" component={App} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

render (
  <Root />,
  document.getElementById('root')
)
