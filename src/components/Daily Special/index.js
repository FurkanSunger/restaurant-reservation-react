import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRestaurantInfos } from '../../redux/actions/restaurantActions'
import { PrimaryText, SectionTitle } from '../CommonElements'
import { SpecialsWrapper } from './DailySpecial.element'

const DailySpecial = (props) => {
    useEffect(() => {
        props.actions.getRestaurant();
    }, [])

    return (
        <SpecialsWrapper>
            <div className="container color-white">
                <div className="row text-center">
                    <SectionTitle className="color-danger secondary-font">Today We Have</SectionTitle>
                    <SectionTitle>DAILY SPECIAL</SectionTitle>
                </div>
                <div className="row mt-4 text-center">
                    {
                        props.restaurant.map(item => item.specials.map(special => (
                            <div className="col-lg-3" key={special.id}>
                                <img className="img-fluid rounded-circle mb-2" src={special.image} alt="special-img" />
                                <PrimaryText className="fw-bold">{special.name}</PrimaryText>
                                <PrimaryText>{special.category.toUpperCase()}</PrimaryText>
                            </div>
                        )))
                    }
                </div>
            </div>
        </SpecialsWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(DailySpecial)
