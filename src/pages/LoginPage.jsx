import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import UserLogin from '../components/common/UserLogin'

export class LoginPage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
   <Fragment>
    <Container className="text-center" fluid={true}>
    <div className="section-title text-center mb-4"><h2> Login Form </h2>
    </div>
</Container>

<UserLogin/>
   </Fragment>
    )
  }
}

export default LoginPage
