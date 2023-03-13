import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/css/Categories.css'
import Cat1 from '../../assets/images/lamp.png'

export class Categories extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center" fluid={true}>

                    <div className="section-title text-center"><h2> CATEGORIES</h2>
                        <p>Some Of Our Exclusive Collection, You May Like</p>
                    </div>

                </Container>

                <Row>


                    <Col lg={2} md={4} sm={6}>
                        <Card className="h-100 w-100 text-center" >
                        <Link to="/category" className='text-link'>
                            <Card.Body>
                                <img alt="" className="center" src={Cat1} />
                                <h4 className="category-name">Living Room </h4>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>


                    <Col lg={2} md={4} sm={6}>
                    <Card className="h-100 w-100 text-center" >
                        <Link  className='text-link' to="/category">
                            <Card.Body>
                                <img alt="" className="center" src={Cat1} />
                                <h4 className="category-name">Living Room </h4>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>


                    <Col lg={2} md={4} sm={6}>
                    <Card className="h-100 w-100 text-center" >
                        <Link  className='text-link' to="/category">
                            <Card.Body>
                                <img alt="" className="center" src={Cat1} />
                                <h4 className="category-name">Living Room </h4>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>


                    <Col lg={2} md={4} sm={6}>
                    <Card className="h-100 w-100 text-center" >
                        <Link  className='text-link' to="/category">
                            <Card.Body>
                                <img alt="" className="center" src={Cat1} />
                                <h4 className="category-name">Living Room </h4>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>


                    <Col lg={2} md={4} sm={6}>
                    <Card className="h-100 w-100 text-center" >
                        <Link  className='text-link' to="/category">
                            <Card.Body>
                                <img alt="" className="center" src={Cat1} />
                                <h4 className="category-name">Living Room </h4>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>


                    <Col lg={2} md={4} sm={6}>
                    <Card className="h-100 w-100 text-center" >
                        <Link  className='text-link' to="/category">
                            <Card.Body>
                                <img alt="" className="center" src={Cat1} />
                                <h4 className="category-name">Living Room </h4>
                            </Card.Body>
                            </Link>
                        </Card>
                    </Col>

                </Row>

            </Fragment>
        )
    }
}

export default Categories
