import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 45px;
`;

export const NavLogo = styled.a`
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media screen and (max-width: 992px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background-color: rgba(240, 165, 0, 0.8);
    z-index: 1222;
  }
`;

export const NavItemLink = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #e45826;
    border-bottom: 2px solid #e45826;
    transition: 0.4s ease;
  }

  @media screen and (max-width: 992px) {
    margin: 1rem 0;
  }
`;
