import React from 'react'

import Navbar from '../components/Navbar'
import Carousal from '../Images&Logos/Carousal'
import Girl from '../Images&Logos/Girl'


const Homepage = () => {
  return (
    <div>
      
      <Navbar/>
      <Girl/>
     <Carousal/>
      
       {/* <Footer/> */}
    </div>
  )
}

export default Homepage