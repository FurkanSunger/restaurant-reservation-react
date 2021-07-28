import React from 'react'
import { LinkButton, PrimaryText, SectionTitle } from '../CommonElements'
import aboutusImg from "../../images/aboutus-img.jpg";
import { AboutUsWrapper } from './AboutUs.element';

const AboutUs = () => {
    return (
        <AboutUsWrapper className="white-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 d-flex flex-column justify-content-center align-items-start">
                        <SectionTitle className="secondary-font color-danger">Welcome to Restaurant</SectionTitle>
                        <SectionTitle>OUR STORY</SectionTitle>
                        <PrimaryText className="my-4 color-primary">The Restaurant opened in March 2013 in Shoreditch Town Hall, East London. We serve modern British cooking – thoughtful, precise and elegant food in a relaxed and informal setting.</PrimaryText>
                        <LinkButton className="danger-bg color-light">Read More</LinkButton>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src={aboutusImg} alt="aboutus-img" />
                    </div>
                </div>
            </div>
        </AboutUsWrapper>
    )
}

export default AboutUs
