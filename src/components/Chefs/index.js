import React, { useEffect } from 'react'
import { PrimaryText, SectionTitle, SocialMedia, SocialMediaItem, SocialMediaLink } from '../CommonElements'
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { ChefSliderItem, ChefSocialMediaWrapper, ChefsWrapper } from './Chefs.element';
import Slider from "react-slick";
import { bindActionCreators } from 'redux';
import { fetchRestaurantInfos } from '../../redux/actions/restaurantActions';
import { connect } from 'react-redux';

const Chefs = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      useEffect(() => {
          props.actions.getRestaurant();
      }, [])
      
    return (
        <ChefsWrapper>
            <div className="container">
                <SectionTitle className="secondary-font color-danger text-center">Go to Kitchen</SectionTitle>
                <SectionTitle className="text-center">MEET OUR CHEFS</SectionTitle>
                <Slider {...settings}>
                    {
                        props.restaurant.map(item => item.chefs.map(chef => (
                            <ChefSliderItem key={chef.id}>
                        <img src={chef.image} alt="chef-img" className="img-fluid rounded" />
                        <ChefSocialMediaWrapper>
                            <SocialMedia>
                                <SocialMediaItem>
                                    <SocialMediaLink className="color-light" href="/">
                                        <FaFacebookF />
                                    </SocialMediaLink>
                                </SocialMediaItem>
                                <SocialMediaItem>
                                    <SocialMediaLink className="color-light" href="/">
                                        <FaInstagram />
                                    </SocialMediaLink>
                                </SocialMediaItem>
                                <SocialMediaItem>
                                    <SocialMediaLink className="color-light" href="/">
                                        <FaYoutube />
                                    </SocialMediaLink>
                                </SocialMediaItem>
                                <SocialMediaItem>
                                    <SocialMediaLink className="color-light" href="/">
                                        <FaPinterestP />
                                    </SocialMediaLink>
                                </SocialMediaItem>
                            </SocialMedia>
                        </ChefSocialMediaWrapper>
                        <span>
                            <PrimaryText className="fw-bold">{chef.fullname}</PrimaryText>
                            <PrimaryText>{chef.job}</PrimaryText>
                        </span>
                    </ChefSliderItem>
                        )))
                    }
                </Slider>
            </div>
        </ChefsWrapper>
    )
}

const mapStateToProps = state => {
    return {
        restaurant: state.restaurantReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            getRestaurant: bindActionCreators(fetchRestaurantInfos, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chefs)
