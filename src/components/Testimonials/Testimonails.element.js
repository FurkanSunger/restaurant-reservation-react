import styled from "styled-components";
import testimonialImg from "../../images/testimonials-bg.jpg";

export const TestimonialsWrapper = styled.div`
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${testimonialImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 75px 0;
`;

export const TestimonialsSliderWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem auto 0 auto;
`;

export const TestimonailItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;