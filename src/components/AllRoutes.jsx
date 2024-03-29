import React from 'react'
import AddToCart from '../Pages/AddToCart'
import HeartPage from '../Pages/HeartPage'
import Homepage from '../Pages/Homepage'
import OrdersPage from '../Pages/OrdersPage'
import {Routes,Route} from "react-router-dom"
import ProductsPage from '../Pages/ProductsPage'
import SingleProductPage from '../Pages/SingleProductPage'
import SignInPage from '../Pages/SignInPage'
import PrivateRoute from './PrivateRoute'
import SignUpPage from '../Pages/SignUpPage'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/signin" element={<SignInPage/>}/>
    <Route path="/my-account" element={<SignUpPage/>}/>
    <Route  path="/orders" element={<OrdersPage/>}/>
    <Route  path="/hearts" element={<HeartPage/>}/>
    <Route  path="/products" element={<ProductsPage/>}/>
    <Route  path="/products/:id" element={<SingleProductPage/>}/>
    <Route  path="/addtocart" element={<AddToCart/>}/>
   
   </Routes>
  )
}

export default AllRoutes