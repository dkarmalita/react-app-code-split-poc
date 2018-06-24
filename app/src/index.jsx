import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'store'

import { Router } from './Router'
import { fetchModule, globilize } from './utils'
import './globilize';

const renderApp = (routes, store) => ReactDOM.render((
  <Provider store={ store }>
    <Router routes={ routes }/>
  </Provider>
), document.getElementsByTagName('div')[0])

const loadModule = () => {
  fetchModule('module/bundle.js', ['@kard/moduleA'])
    .then(([modA]) => {
      const { routes, duck } = modA
      renderApp(modA.routes, createStore([duck]))
  })
}

loadModule()

