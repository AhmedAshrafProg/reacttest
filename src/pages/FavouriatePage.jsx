import React, { Component, Fragment } from 'react'
import Favouraite from '../components/common/Favouraite'

export class FavouriatePage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
      <Fragment>

<Favouraite/>

      </Fragment>
    )
  }
}

export default FavouriatePage
