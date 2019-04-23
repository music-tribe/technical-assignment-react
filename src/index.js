import './styles.css'
import '@babel/polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import styled from 'styled-components'

import createHistory from 'history/createBrowserHistory'

import configureStore from './redux/configureStore'

import Navbar from './components/Navbar'
import OasisPage from './components/OasisPage'
import JamiroquaiPage from './components/JamiroquaiPage'

const history = createHistory()

const store = configureStore(history)

const Container = styled.div`

`

render(
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path='/oasis' render={() => <OasisPage />} />
          <Route exact path='/jamiroquai' render={() => <JamiroquaiPage />} />
        </Switch>
      </Container>
    </BrowserRouter>
  </Provider>,
  document.body
)
