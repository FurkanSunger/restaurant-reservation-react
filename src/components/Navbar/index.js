import React from "react";
import {
  NavbarWrapper,
  NavItemLink,
  NavItems,
  NavLogo,
} from "./Navbar.element";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = (props) => {
  const { background } = props;

  const bgColorChecker = (background) => {
    let bgColor = "";
    if (background === "transparent") {
      bgColor = "transparent-bg";
      return bgColor;
    } else if (background === "primary") {
      bgColor = "primary-bg";
      return bgColor;
    }
  };

  return (
    <NavbarWrapper
      className={bgColorChecker(background) + " navbar navbar-expand-lg"}
    >
      <div className="container-fluid">
        <NavLogo className="secondary-font color-white fs-1" href="/">
          Yummy Foods
        </NavLogo>
        <button
          className="navbar-toggler color-white fs-1 outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <NavItems className="navbar-nav">
            <NavItemLink to="/" className="color-white mx-3">
              Home
            </NavItemLink>
            <NavItemLink to="/menu" className="color-white mx-3">
              Menu
            </NavItemLink>
            <NavItemLink to="/about" className="color-white mx-3">
              About
            </NavItemLink>
            <NavItemLink to="/contact" className="color-white mx-3">
              Contact
            </NavItemLink>
          </NavItems>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
