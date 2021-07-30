import React from 'react'
import { NavbarWrapper, NavItemLink, NavItems, NavLogo } from './Navbar.element';

const Navbar = (props) => {
    const {background} = props;

    const bgColorChecker = (background) => {
        let bgColor = "";
        if (background === "transparent") {
            bgColor = "transparent-bg";
            return bgColor;
        } else if (background === "primary") {
            bgColor = "primary-bg";
            return bgColor;
        }
    }

    return (
        <NavbarWrapper className={bgColorChecker(background)}>
            <NavLogo className="secondary-font color-white fs-1">Yummy Foods</NavLogo>
            <NavItems>
                <NavItemLink to="/" className="color-white mx-3">Home</NavItemLink>
                <NavItemLink to="/" className="color-white mx-3">Menu</NavItemLink>
                <NavItemLink to="/about" className="color-white mx-3">About</NavItemLink>
                <NavItemLink to="/" className="color-white mx-3">Contact</NavItemLink>
            </NavItems>
        </NavbarWrapper>
    )
}

export default Navbar
