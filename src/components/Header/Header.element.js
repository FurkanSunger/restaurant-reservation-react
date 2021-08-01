import styled from "styled-components";
import headerImg from "../../images/header-img.jpg";

export const HeaderWrapper = styled.div`
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${headerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem 0;
`;

export const NavbarSection = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const HeaderSection = styled.div`
  width: 100%;
`;

export const TitleGroup = styled.div`
  @media screen and (max-width: 992px) {
    align-items: center !important;
    text-align: center;
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 60px;
  font-weight: 300;
  letter-spacing: 5px;

  @media screen and (max-width: 992px) {
    font-size: 3rem !important;
  }
`;
