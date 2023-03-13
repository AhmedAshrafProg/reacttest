import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sofa from '../../assets/images/sofa.jpg'

export class ProductCategory extends Component {
     render() {
          return (
               <Fragment>

                    <Container className="text-center" fluid={true}>
                         <div className="section-title text-center mb-55"><h2> Product Category</h2> </div>
                         <Row>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link  className='text-link' to='/productdetails'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Sofa} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <p className="product-price-on-card">price : 100$</p>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>


                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link  className='text-link' to='/productdetails'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Sofa} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <p className="product-price-on-card">price : 100$</p>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link  className='text-link' to='/productdetails'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Sofa} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <p className="product-price-on-card">price : 100$</p>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link  className='text-link' to='/productdetails'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Sofa} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <p className="product-price-on-card">price : 100$</p>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>


                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link  className='text-link' to='/productdetails'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Sofa} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <p className="product-price-on-card">price : 100$</p>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link  className='text-link' to='/productdetails'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Sofa} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <p className="product-price-on-card">price : 100$</p>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link  className='text-link' to='/productdetails'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Sofa} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <p className="product-price-on-card">price : 100$</p>
                                                  </Card.Body>
                                             </Card>
                                        </Link>
                                   </div>
                              </Col>

                              <Col className="p-0" lg={3} md={3} sm={6} >
                                   <div>
                                        <Link  className='text-link' to='/productdetails'>
                                             <Card className="image-box card w-100" >
                                                  <img alt="" className="center w-75" src={Sofa} />
                                                  <Card.Body>
                                                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                       <p className="product-price-on-card">price : 100$</p>
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

export default ProductCategory
