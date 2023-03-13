import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/SideBarMenu.css'
import Test from '../../assets/images/test.png'

export class SidebarMenu extends Component {

    render() {
    return (
        <Fragment>
        <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">
             <button className="accordion">
                  <img className="accordionMenuIcon" src={Test} alt=""/> Living Room
             </button>
             <div className="panel">
                  <ul>
                  <li><Link to='/subcategory' className="accordionItem" > Sofa</Link></li>
                  <li><Link to='/subcategory' className="accordionItem" > neesh</Link></li>
                  <li><Link to='/subcategory' className="accordionItem" > Beds</Link></li>
                  <li><Link to='/subcategory' className="accordionItem" > tables </Link></li>
                  <li><Link to='/subcategory' className="accordionItem" > Tv Units </Link></li>
                  </ul>
             </div>


             <button className="accordion">
             <img className="accordionMenuIcon" src={Test} alt=""/> Living Room
        </button>
        <div className="panel">
             <ul>
                  <li><Link to='/subcategory' className="accordionItem" > Sofa</Link></li>
                  <li><Link to='/subcategory' className="accordionItem" > neesh</Link></li>
                  <li><Link to='/subcategory' className="accordionItem" > Beds</Link></li>
                  <li><Link to='/subcategory' className="accordionItem" > tables </Link></li>
                  <li><Link to='/subcategory' className="accordionItem" > Tv Units </Link></li>
             </ul>
        </div>



   </div>
   </div>
   </Fragment>
    )
  }
}

export default SidebarMenu
