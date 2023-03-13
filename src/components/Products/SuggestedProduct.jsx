import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import GreenSofa from '../../assets/images/greensofa.jpg'
export class SuggestedProduct extends Component {
  render() {
    return (
    <Fragment>

    <Container className="text-center" fluid={true}>
    <div className="section-title text-center mb-55"><h2> Suggested Products</h2>
         <p>Some Of Our Exclusive Collection, You May Like</p>
    </div>
    <Row >

   <Col className="p-1" lg={2} md={2} sm={6} >
        <div>
        <Link  className='text-link' to='/productdetails'>
             <Card className="image-box card w-100" >
                  <img alt="" className="center" src={GreenSofa} />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
             </Link>
        </div>
    </Col>


    <Col className="p-1" lg={2} md={2} sm={6} >
    <div>
    <Link  className='text-link' to='/productdetails'>
             <Card className="image-box card w-100" >
                  <img alt="" className="center" src={GreenSofa} />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
             </Link>
    </div>
</Col>

<Col className="p-1" lg={2} md={2} sm={6} >
        <div>
        <Link  className='text-link' to='/productdetails'>
             <Card className="image-box card w-100" >
                  <img alt="" className="center" src={GreenSofa} />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
             </Link>
        </div>
    </Col>


    <Col className="p-1" lg={2} md={2} sm={6} >
    <div>
    <Link  className='text-link' to='/productdetails'>
             <Card className="image-box card w-100" >
                  <img alt="" className="center" src={GreenSofa} />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
             </Link>
    </div>
</Col>
<Col className="p-1" lg={2} md={2} sm={6} >
        <div>
        <Link  className='text-link' to='/productdetails'>
             <Card className="image-box card w-100" >
                  <img alt="" className="center" src={GreenSofa} />
                  <Card.Body>
                       <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                       <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
             </Card>
             </Link>
        </div>
    </Col>


    <Col className="p-1" lg={2} md={2} sm={6} >
    <div>
    <Link  className='text-link' to='/productdetails'>
             <Card className="image-box card w-100" >
                  <img alt="" className="center" src={GreenSofa} />
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

export default SuggestedProduct