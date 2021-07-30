import React from 'react'
import AboutUs from '../components/About Us'
import Chefs from '../components/Chefs'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'

const About = () => {
    return (
        <>
            <div className="primary-bg color-light pt-5 border-top">
                <div className="container">
                    <Navbar background="primary" />
                </div>
            </div>
            <AboutUs />
            <Info />
            <Chefs />
            <Testimonials />
        </>
    )
}

export default About
