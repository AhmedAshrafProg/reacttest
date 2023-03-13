import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Register from '../components/common/Register'

export class RegisterPage extends Component {  constructor(){
  super();
  window.scroll(0,0)

  }
  render() {
    return (
  <Fragment>
    <Container className="text-center" fluid={true}>
    <div className="section-title text-center mb-4"><h2> Register Form </h2>
    </div>
</Container>

<Register/>

  </Fragment>
    )
  }
}

export default RegisterPage
