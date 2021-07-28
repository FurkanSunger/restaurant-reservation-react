import React from 'react'
import { NavbarWrapper, NavItemLink, NavItems, NavLogo } from './Navbar.element';

const Navbar = (props) => {
    const {background} = props;

    const colorChecker = (background) => {
        let bgColor = "";
        if (background === "transparent") {
            bgColor = "transparent-bg";
            return bgColor;
        } else if (background === "white") {
            bgColor = "white-bg";
            return bgColor;
        }
    }

    return (
        <NavbarWrapper className={colorChecker(background)}>
            <NavLogo className="secondary-font color-white fs-1">Yummy Foods</NavLogo>
            <NavItems>
                <NavItemLink to="/" className="color-white mx-3">Home</NavItemLink>
                <NavItemLink to="/" className="color-white mx-3">Menu</NavItemLink>
                <NavItemLink to="/" className="color-white mx-3">About</NavItemLink>
                <NavItemLink to="/" className="color-white mx-3">Contact</NavItemLink>
            </NavItems>
        </NavbarWrapper>
    )
}

export default Navbar
