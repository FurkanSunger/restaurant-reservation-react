import React from 'react'
import { PrimaryText, SectionTitle } from '../CommonElements'
import { TestimonailItem, TestimonialsSliderWrapper, TestimonialsWrapper } from './Testimonails.element'

const Testimonials = () => {
    return (
        <TestimonialsWrapper>
            <div className="container">
                <SectionTitle className="secondary-font color-danger text-center">Listen Our Customers</SectionTitle>
                <SectionTitle className="text-center color-light">TESTIMONIALS</SectionTitle>
                <hr className="color-white w-50 mx-auto" />
                <TestimonialsSliderWrapper>
                    <TestimonailItem>
                        <PrimaryText className="color-light">A quick and healthy choice of snacks whilst you are out enjoying Victoria centre. Staff are friendly and there is a good choice of food and drinks for all the family. Worth a visit for a Kwik lunch fix.</PrimaryText>
                        <PrimaryText className="fw-italic color-white secondary-font fs-3">Oliver Q.</PrimaryText>
                    </TestimonailItem>
                </TestimonialsSliderWrapper>
            </div>
        </TestimonialsWrapper>
    )
}

export default Testimonials
