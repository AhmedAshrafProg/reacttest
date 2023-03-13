import AppRouter from './router/AppRouter'
import React, { Component, Fragment } from 'react'
import './assets/css/common.css'
import './assets/css/bootstrap.min.css'
import './assets/css/fontawesome.css'
import './assets/css/all.css'

import {  BrowserRouter } from "react-router-dom"



export class App extends Component {
  render() {
    return (
      <Fragment>

      <BrowserRouter>

      <AppRouter/>

      </BrowserRouter>

      </Fragment>
    )
  }
}
export default App
