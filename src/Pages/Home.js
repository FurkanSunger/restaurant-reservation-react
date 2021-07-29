import React from 'react'
import AboutUs from '../components/About Us'
import Header from '../components/Header'
import TopMenu from '../components/Top Menu'
import DailySpecial from "../components/Daily Special";
import Menu from '../components/Menu';
import Chefs from '../components/Chefs';
import Testimonials from '../components/Testimonials';
import Reservation from '../components/Reservation';

const Home = () => {
    return (
        <>
            <TopMenu />
            <Header />
            <AboutUs />
            <DailySpecial />
            <Menu />
            <Chefs />
            <Testimonials />
            <Reservation />
        </>
    )
}

export default Home
