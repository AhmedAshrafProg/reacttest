import React, { Component, Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Interior from '../../assets/images/interior.jpg'
import '../../assets/css/HomeSlider.css'


export class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:1500,
    };
    return (
      <Fragment>
        <div>
          <Slider {...settings}>
            <div>
              <img className="slider_image" src={Interior} alt="" />
            </div>
            <div>
              <img className="slider_image" src={Interior} alt="" />
            </div>
            <div>
              <img className="slider_image" src={Interior} alt="" />
            </div>
            <div>
              <img className="slider_image" src={Interior} alt="" />
            </div>
            <div>
              <img className="slider_image" src={Interior} alt="" />
            </div>
            <div>
              <img className="slider_image" src={Interior} alt="" />
            </div>
          </Slider>
        </div>
      </Fragment>
    );
  }
}

export default HomeSlider
