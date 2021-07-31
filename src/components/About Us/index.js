import React, { useEffect } from 'react'
import { PrimaryText, SectionTitle } from '../CommonElements'
import aboutusImg from "../../images/aboutus-img.jpg";
import { AboutUsWrapper } from './AboutUs.element';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRestaurantInfos } from '../../redux/actions/restaurantActions';

const AboutUs = (props) => {
    useEffect(() => {
        props.actions.getRestaurant();
    }, [])

    return (
        <AboutUsWrapper className="white-bg" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 d-flex flex-column justify-content-center align-items-start">
                        <SectionTitle className="secondary-font color-danger">Welcome to Restaurant</SectionTitle>
                        <SectionTitle>OUR STORY</SectionTitle>
                        <PrimaryText className="my-4 color-primary">{props.restaurant.map(item => item.about)}</PrimaryText>
                    </div>
                    <div className="col-lg-4">
                        <img className="img-fluid" src={aboutusImg} alt="aboutus-img" />
                    </div>
                </div>
            </div>
        </AboutUsWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurantReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            getRestaurant: bindActionCreators(fetchRestaurantInfos, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
