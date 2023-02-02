import React from 'react'



import Accessory from './Accessory/Accessory'
import Banner from '../components/Banner/Banner'
import Category from './Category/Category'
import NewProducts from './NewProduct/NewProducts'
import Banner2 from '../components/Banner2/Banner2'


const Homepage = () => {



   return (
      <>
         <Banner />
         <div className='pb-7'><Category /></div>
         
         <Banner2 />
         <Accessory />
      </>
   )





}

export default Homepage
