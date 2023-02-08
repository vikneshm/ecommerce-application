import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

const Home = () => {
    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Home;