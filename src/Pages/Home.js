import React from 'react'
import AboutUs from '../components/About Us'
import Header from '../components/Header'
import DailySpecial from "../components/Daily Special";
import Menu from '../components/Menu';
import Chefs from '../components/Chefs';
import Testimonials from '../components/Testimonials';
import Reservation from '../components/Reservation';
import Info from '../components/Info';

const Home = () => {
    return (
        <>
            <Header />
            <AboutUs show="true" />
            <DailySpecial />
            <Menu />
            <Chefs />
            <Testimonials />
            <Reservation />
            <Info />
        </>
    )
}

export default Home
