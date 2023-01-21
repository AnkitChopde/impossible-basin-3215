
import React from 'react'
import BelowNavbar from '../components/BelowNavbar'
import Footer from '../components/Footer'

import Navbar from '../components/Navbar'
import Card from '../SmallComponents/Card'
import ProductSimple from '../SmallComponents/CardPage'
import Carousal from '../SmallComponents/Carousal'
import ImageSlider from '../SmallComponents/ImageSlider'
import ImageSwiper from '../SmallComponents/ImageSwiper'
import SliderCard from '../SmallComponents/SliderCard'
const Homepage = () => {
  return (
    <div>

      {/* <ProductSimple/> */}
   
       <Navbar/>
      
     <BelowNavbar/>
        <Footer/>
       
    </div>
  )
}

export default Homepage