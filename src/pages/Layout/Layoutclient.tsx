import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


const Layoutclient = () => {
  return (
    <div>

       <header><Header/></header>

       
        <main>
            <Outlet />
        </main>
        <footer className='content-end'> <Footer/></footer>


    </div>


  )
}

export default Layoutclient
