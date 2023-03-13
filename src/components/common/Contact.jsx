import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import '../../assets/css/Contact.css'

export class Contact extends Component {
  render() {
    return (
        <Fragment>
        <Container>
             <Row className="p-2">

                  <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                       <Row className="text-center">

                            <Col className="p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                                 <br></br><br></br>
                                 <p>  meram, Sarayköy Mahallesi, 42155 Meram/Konya, Turkey  <br></br>
                                      email : Support@ctp.com
                                 </p>
                                 <iframe title="myFrame" src="https://maps.google.com/maps?q=%D9%85%D8%B5%D8%B1%20%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9&t=&z=15&ie=UTF8&iwloc=&output=embed" width="600" height="450" styles="border:0;" allowFullScreen="" loading="lazy"></iframe>
                            </Col>

                            <Col className="justify-content-center d-flex" md={6} lg={6} sm={12} xs={12}>
                                 <Form id="contactForm" className="onboardForm" rows="4" cols="50" >
                                      <h4 className="section-title-login">CONTACT WITH US </h4>
                                      <h6 className="section-sub-title">Please Contact With Us </h6>
                                      <input className="form-control m-2" type="text" placeholder="Enter Your Name" />
                                      <input className="form-control m-2" type="email" placeholder="Enter Email" />
                                      <Form.Control className="form-control m-2" as="textarea" rows={3} placeholder="your Message" />
                                      <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>
                                 </Form>
                            </Col>

                       </Row>
                  </Col>
             </Row>
        </Container>
   </Fragment>
    )
  }
}

export default Contact
