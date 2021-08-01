import React, { useEffect } from "react";
import { PrimaryText, SectionTitle } from "../CommonElements";
import { TestimonailItem, TestimonialsWrapper } from "./Testimonails.element";
import Slider from "react-slick";
import { bindActionCreators } from "redux";
import { fetchRestaurantInfos } from "../../redux/actions/restaurantActions";
import { connect } from "react-redux";

const Testimonials = (props) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    props.actions.getRestaurant();
  }, []);

  return (
    <TestimonialsWrapper>
      <div className="container">
        <SectionTitle className="secondary-font color-danger text-center">
          Listen Our Customers
        </SectionTitle>
        <SectionTitle className="text-center color-light">
          TESTIMONIALS
        </SectionTitle>
        <hr className="color-white w-50 mx-auto" />
        <Slider {...settings}>
          {props.restaurant.map((item) =>
            item.testimonials.map((testimonial) => (
              <TestimonailItem key={testimonial.id}>
                <PrimaryText className="color-light">
                  {testimonial.message}
                </PrimaryText>
                <PrimaryText className="fw-italic color-white secondary-font fs-3">
                  {testimonial.name}
                </PrimaryText>
              </TestimonailItem>
            ))
          )}
        </Slider>
      </div>
    </TestimonialsWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    restaurant: state.restaurantReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getRestaurant: bindActionCreators(fetchRestaurantInfos, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
