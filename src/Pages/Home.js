import React from 'react'
import AboutUs from '../components/About Us'
import Header from '../components/Header'
import DailySpecial from "../components/Daily Special";
import Menu from '../components/Menu';
import Chefs from '../components/Chefs';
import Testimonials from '../components/Testimonials';
import Reservation from '../components/Reservation';
import Info from '../components/Info';
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';

const Home = () => {
    return (
        <>
            <LazyLoad once={true} overflow={true}>
            <Fade bottom>
                <Header />
                <AboutUs show="true" />
                <DailySpecial />
                <Menu />
                <Chefs />
                <Testimonials />
                <Reservation />
                <Info />
            </Fade>
            </LazyLoad>
        </>
    )
}

export default Home
