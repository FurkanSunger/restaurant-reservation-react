import React from 'react'
import AboutUs from '../components/About Us'
import Header from '../components/Header'
import TopMenu from '../components/Top Menu'
import DailySpecial from "../components/Daily Special";
import Menu from '../components/Menu';

const Home = () => {
    return (
        <>
            <TopMenu />
            <Header />
            <AboutUs />
            <DailySpecial />
            <Menu />
        </>
    )
}

export default Home
