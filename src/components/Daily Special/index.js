import React from 'react'
import { PrimaryText, SectionTitle } from '../CommonElements'
import { SpecialsWrapper } from './DailySpecial.element'

const DailySpecial = () => {
    return (
        <SpecialsWrapper>
            <div className="container color-white">
                <div className="row text-center">
                    <SectionTitle className="color-danger secondary-font">Today We Have</SectionTitle>
                    <SectionTitle>DAILY SPECIAL</SectionTitle>
                </div>
                <div className="row mt-4 text-center">
                    <div className="col-lg-3">
                        <img className="img-fluid rounded-circle mb-2" src="http://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-4.png" alt="special-img" />
                        <PrimaryText>Special Title</PrimaryText>
                        <PrimaryText>Special Category</PrimaryText>
                    </div>
                    <div className="col-lg-3">
                        <img className="img-fluid rounded-circle mb-2" src="http://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-4.png" alt="special-img" />
                        <PrimaryText>Special Title</PrimaryText>
                        <PrimaryText>Special Category</PrimaryText>
                    </div>
                    <div className="col-lg-3">
                        <img className="img-fluid rounded-circle mb-2" src="http://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-4.png" alt="special-img" />
                        <PrimaryText>Special Title</PrimaryText>
                        <PrimaryText>Special Category</PrimaryText>
                    </div>
                    <div className="col-lg-3">
                        <img className="img-fluid rounded-circle mb-2" src="http://demo5.cmsmart.net/wordpress/foody/restaurant/wp-content/uploads/2018/02/img-4.png" alt="special-img" />
                        <PrimaryText>Special Title</PrimaryText>
                        <PrimaryText>Special Category</PrimaryText>
                    </div>
                </div>
            </div>
        </SpecialsWrapper>
    )
}

export default DailySpecial
