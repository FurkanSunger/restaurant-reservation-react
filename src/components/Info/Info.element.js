import styled from "styled-components";
import infoImg from "../../images/info-bg.jpg";

export const InfoWrapper = styled.div`
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${infoImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 60px 0;
`;