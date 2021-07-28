import React from 'react'
import { HeaderSection, HeaderTitle, HeaderWrapper, NavbarSection, TitleGroup } from './Header.element'
import { NormalButton } from "../CommonElements";
import foodImg from "../../images/header-food-img.png";
import Navbar from "../Navbar/index";

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="container d-flex flex-column justify-content-between align-items-center">
                <NavbarSection>
                    <Navbar background="transparent" />
                </NavbarSection>
                <HeaderSection className="d-flex flex-column justify-content-center align-items-center">
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <img className="img-fluid" src={foodImg} alt="food-img" />
                        </div>
                        <TitleGroup className="col-lg-6 color-light secondary-font d-flex flex-column justify-content-center align-items-start">
                            <HeaderTitle>Delicious</HeaderTitle>
                            <HeaderTitle>Comfortable</HeaderTitle>
                            <HeaderTitle>The Best Restaurant</HeaderTitle>
                        </TitleGroup>
                    </div>
                    <NormalButton>Let's Start</NormalButton>
                </HeaderSection>
            </div>
        </HeaderWrapper>
    )
}

export default Header
