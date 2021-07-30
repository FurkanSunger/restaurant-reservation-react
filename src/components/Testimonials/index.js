import React from 'react'
import { PrimaryText, SectionTitle } from '../CommonElements'
import { TestimonailItem, TestimonialsWrapper } from './Testimonails.element'
import Slider from "react-slick";

const Testimonials = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return (
        <TestimonialsWrapper>
            <div className="container">
                <SectionTitle className="secondary-font color-danger text-center">Listen Our Customers</SectionTitle>
                <SectionTitle className="text-center color-light">TESTIMONIALS</SectionTitle>
                <hr className="color-white w-50 mx-auto" />
                <Slider {...settings}>
                    <TestimonailItem>
                        <PrimaryText className="color-light">A quick and healthy choice of snacks whilst you are out enjoying Victoria centre. Staff are friendly and there is a good choice of food and drinks for all the family. Worth a visit for a Kwik lunch fix.</PrimaryText>
                        <PrimaryText className="fw-italic color-white secondary-font fs-3">Oliver Q.</PrimaryText>
                    </TestimonailItem>
                    <TestimonailItem>
                        <PrimaryText className="color-light">A quick and heatrgdgsdrlthy choice of snacks whilst you are out enjoying Victoria centre. Staff are friendly and there is a good choice of food and drinks for all the family. Worth a visit for a Kwik lunch fix.</PrimaryText>
                        <PrimaryText className="fw-italic color-white secondary-font fs-3">Oliver Q.</PrimaryText>
                    </TestimonailItem>
                    <TestimonailItem>
                        <PrimaryText className="color-light">A quick adfadfand healthy choice of snacks whilst you are out enjoying Victoria centre. Staff are friendly and there is a good choice of food and drinks for all the family. Worth a visit for a Kwik lunch fix.</PrimaryText>
                        <PrimaryText className="fw-italic color-white secondary-font fs-3">Oliver Q.</PrimaryText>
                    </TestimonailItem>
                </Slider>
            </div>
        </TestimonialsWrapper>
    )
}

export default Testimonials
