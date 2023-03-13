import React, { Component, Fragment } from 'react'
import ResetPass from '../../assets/images/resetpass.jpg'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export class ForgetPassword extends Component {
  render() {
    return (
     <Fragment>

     <Container>
     <Row>
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
               <Row className="text-center">

                    <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                         <Form className="onboardForm" >
                              <h4 className="section-title-login"> Forget Password ? </h4>

                              <input className="form-control m-2" type="email" placeholder="Enter Your Email" />


                              <Button type="submit" className="btn btn-block m-2 site-btn-login"> Rest Password </Button>
                              <br></br> <br></br>
                              <hr />
                              <p> <b> Forget My Password? </b><Link to='/forgetpassword'><b> Froget Password </b> </Link> </p>
                              <p> <b> New User ? </b><Link to='/register'><b> Register </b> </Link> </p>
                         </Form>
                    </Col>

                    <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                         <img className='onboardBanner' src={ResetPass} alt=""/>
                    </Col>

               </Row>
          </Col>
     </Row>
</Container>




     </Fragment>
    )
  }
}

export default ForgetPassword
