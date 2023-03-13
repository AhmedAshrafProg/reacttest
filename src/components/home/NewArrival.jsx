import React, { Component, Fragment } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Room from '../../assets/images/livingroom.jpg'
import '../../assets/css/NewArrival.css'
import '../../assets/css/Buttons.css'
import { Link } from 'react-router-dom';

export class NewArrival extends Component {

     constructor() {
          super();

          this.next = this.next.bind(this);
          this.previous = this.previous.bind(this)

     }



     next() {
          this.slider.slickNext();
     }
     previous() {
          this.slider.slickPrev();
     }

     render() {

          const settings = {
               dots: false,
               infinite: true,
               speed: 500,
               slidesToShow: 4,
               slidesToScroll: 1,
               autoplay: true,
               autoplaySpeed: 1500,
          };

          return (
               <Fragment>

                    <Container>

                         <div className="section-title text-center mb-5"><h2> New Arrival

                              &nbsp;

                              <Button className="btn btn-sm ml-2 site-btn" onClick={this.previous} ><i className="fa fa-angle-left"></i></Button>
                              &nbsp;
                              <Button className="btn btn-sm ml-2 site-btn" onClick={this.next}  ><i className="fa fa-angle-right"></i></Button>

                         </h2>
                              <p>Some Of Our Exclusive Collection, You May Like</p>
                         </div>

                    </Container>

                    <Row>

                         <Slider ref={c => (this.slider = c)} {...settings} className="text-center">
                              <div>
                                   <Link className='text-link' to='/productdetails'>
                                        <Card className="image-box card" >
                                             <img alt="" className="center" src={Room} />
                                             <Card.Body>
                                                  <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                  <div>
                                                       <span className="text-warning">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"> </i>
                                                       </span>
                                                       <span >

                                                            <i className="fa fa-star"></i>
                                                       </span>
                                                  </div>
                                                  <p className="product-price-on-card">price : 100$</p>
                                             </Card.Body>
                                        </Card>
                                   </Link>
                              </div>


                              <div>
                                   <Link className='text-link' to='/productdetails'>
                                        <Card className="image-box card" >
                                             <img alt="" className="center" src={Room} />
                                             <Card.Body>
                                                  <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                  <div>
                                                       <span className="text-warning">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"> </i>
                                                       </span>
                                                       <span >

                                                            <i className="fa fa-star"></i>
                                                       </span>
                                                  </div>
                                                  <p className="product-price-on-card">price : 100$</p>
                                             </Card.Body>
                                        </Card>
                                   </Link>
                              </div>

                              <div>
                                   <Link className='text-link' to='/productdetails'>
                                        <Card className="image-box card" >
                                             <img alt="" className="center" src={Room} />
                                             <Card.Body>
                                                  <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                  <div>
                                                       <span className="text-warning">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"> </i>
                                                       </span>
                                                       <span >

                                                            <i className="fa fa-star"></i>
                                                       </span>
                                                  </div>
                                                  <p className="product-price-on-card">price : 100$</p>
                                             </Card.Body>
                                        </Card>
                                   </Link>
                              </div>

                              <div>
                                   <Link className='text-link' to='/productdetails'>
                                        <Card className="image-box card" >
                                             <img alt="" className="center" src={Room} />
                                             <Card.Body>
                                                  <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                  <div>
                                                       <span className="text-warning">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"> </i>
                                                       </span>
                                                       <span >

                                                            <i className="fa fa-star"></i>
                                                       </span>
                                                  </div>
                                                  <p className="product-price-on-card">price : 100$</p>
                                             </Card.Body>
                                        </Card>
                                   </Link>
                              </div>



                              <div>
                                   <Link className='text-link' to='/productdetails'>
                                        <Card className="image-box card" >
                                             <img alt="" className="center" src={Room} />
                                             <Card.Body>
                                                  <p className="product-name-on-card">Perfect Homes Webster Engineered Wood TV</p>
                                                  <div>
                                                       <span className="text-warning">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"> </i>
                                                       </span>
                                                       <span >

                                                            <i className="fa fa-star"></i>
                                                       </span>
                                                  </div>
                                                  <p className="product-price-on-card">price : 100$</p>
                                             </Card.Body>
                                        </Card>
                                   </Link>
                              </div>
                         </Slider>

                    </Row>

               </Fragment>
          )
     }
}

export default NewArrival
