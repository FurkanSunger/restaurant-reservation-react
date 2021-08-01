import styled from "styled-components";
import dailySpecialImg from "../../images/dailyspecial-bg.jpg";

export const SpecialsWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${dailySpecialImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 45px 0;
`;
