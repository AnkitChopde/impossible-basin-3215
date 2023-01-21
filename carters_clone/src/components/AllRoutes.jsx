import React from 'react'
import AddToCart from '../Pages/AddToCart'
import HeartPage from '../Pages/HeartPage'
import Homepage from '../Pages/Homepage'
import OrdersPage from '../Pages/OrdersPage'
import SignUpPage from '../Pages/SignUpPage'
import {Routes,Route} from "react-router-dom"
import ProductsPage from '../Pages/ProductsPage'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/signin" element={<SignUpPage/>}/>
    <Route  path="/orders" element={<OrdersPage/>}/>
    <Route  path="/hearts" element={<HeartPage/>}/>
    <Route  path="/products" element={<ProductsPage/>}/>
    <Route  path="/addtocart" element={<AddToCart/>}/>
   
   </Routes>
  )
}

export default AllRoutes