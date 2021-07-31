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
`;

export const NavItemLink = styled(Link)`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    
    &:hover {
        color: #E45826;
        border-bottom: 2px solid #E45826;
        transition: 0.4s ease;
    }
`;