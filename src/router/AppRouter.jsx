import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer'
import  { TopNav } from '../components/TopNav'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotificationPage from '../pages/NotificationPage' 
import CartListPage from '../pages/CartListPage' 
import FavouriatePage from '../pages/FavouriatePage'
import SearchPage from '../pages/SearchPage'  
import RegisterPage from '../pages/RegisterPage'  
import ForgetPasswordPage from '../pages/ForgetPasswordPage'  
import SubCategoryPage from '../pages/SubCategoryPage'  
import ProductCategoryPage from '../pages/ProductCategoryPage'  
import ProductDetailsPage from '../pages/ProductDetailsPage'  
import ContactPage from '../pages/ContactPage'  

import {
     Routes,
     Route,
   } from "react-router-dom";
import OrderListPage from '../pages/OrderListPage'

export class AppRouter extends Component {
  render() {
    return (
     <Fragment>

     <TopNav/>

     <Routes>
      
            
          <Route exact path="/"  element={<HomePage/>}  />

          <Route exact path="/profile" element={<OrderListPage/>} />

          <Route exact path="/about" element={<AboutPage/>} />

          <Route exact path="/search" element={<SearchPage/>} />
          
          <Route exact path="/cardlist" element={<CartListPage/>} />
          
          <Route exact path="/favorate" element={<FavouriatePage/>} />

          <Route exact path="/notification" element={<NotificationPage/>} />

          <Route exact path="/login" element={<LoginPage/>} />

          <Route exact path="/register" element={<RegisterPage/>} />

          <Route exact path="/forgetpassword" element={<ForgetPasswordPage/>} />

          <Route exact path="/subcategory" element={<SubCategoryPage/>} />

          <Route exact path="/Category" element={<ProductCategoryPage/>} />

          <Route exact path="/productdetails" element={<ProductDetailsPage/>} />

          <Route exact path="/company" element={<HomePage/>} />

          <Route exact path="/contact" element={<ContactPage/>} />

        </Routes>


     <Footer/>



     </Fragment>
    )
  }
}

export default AppRouter
