
import React from 'react'
import BelowNavbar from '../components/BelowNavbar'
import Footer from '../components/Footer'

import Navbar from '../components/Navbar'
import Card from '../SmallComponents/Card'
import Carousal from '../SmallComponents/Carousal'
import ImageSwiper from '../SmallComponents/ImageSwiper'
const Homepage = () => {
  return (
    <div>
     
       <Navbar/>
      
     <BelowNavbar/>
        <Footer/>
     {/* <Card/> */}
    </div>
  )
}

export default Homepage