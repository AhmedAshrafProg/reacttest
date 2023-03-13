import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Desk from '../../assets/images/desk.jpg'
import { Link } from 'react-router-dom'

export class Favouraite extends Component {
     render() {
          return (
               <Fragment>

                    <Container className="text-center" fluid={true}>
                         <div className="section-title text-center mb-55"><h2> Favouraite Products </h2>
                              <p>Some Of Our Exclusive Collection, You May Like</p>
                         </div>
                         <Row>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link to='/productdetails' className='text-link'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Desk} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <Button className="btn-danger btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>


                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link to='/productdetails' className='text-link'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Desk} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <Button className="btn-danger btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link to='/productdetails' className='text-link'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Desk} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <Button className="btn-danger btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link to='/productdetails' className='text-link'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Desk} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <Button className="btn-danger btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>


                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link to='/productdetails' className='text-link'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Desk} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <Button className="btn-danger btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link to='/productdetails' className='text-link'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Desk} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <Button className="btn-danger btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link to='/productdetails' className='text-link'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Desk} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <Button className="btn-danger btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link to='/productdetails' className='text-link'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Desk} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <Button className="btn-danger btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                         </Row>
                    </Container>

               </Fragment>
          )
     }
}

export default Favouraite
