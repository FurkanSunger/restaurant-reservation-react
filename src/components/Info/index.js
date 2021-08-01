import React from "react";
import { PrimaryText } from "../CommonElements";
import { InfoWrapper } from "./Info.element";
import { BiRestaurant } from "react-icons/bi";
import { GiScooter, GiPartyPopper, GiChefToque } from "react-icons/gi";

const Info = () => {
  return (
    <InfoWrapper>
      <div className="container">
        <div className="row color-light text-center">
          <div className="col-lg-3">
            <GiChefToque className="fs-1 mb-3 color-secondary" />
            <PrimaryText className="fw-bold mb-2">EXCELLENT CHEF</PrimaryText>
            <PrimaryText className="fw-light">
              You can count on our chefs with good quality and professional
              cuisine.
            </PrimaryText>
          </div>
          <div className="col-lg-3">
            <GiScooter className="fs-1 mb-3 color-secondary" />
            <PrimaryText className="fw-bold mb-2">DELIVERY 24/7</PrimaryText>
            <PrimaryText className="fw-light">
              With the restaurant, we are open 7 days a week for you.
            </PrimaryText>
          </div>
          <div className="col-lg-3">
            <BiRestaurant className="fs-1 mb-3 color-secondary" />
            <PrimaryText className="fw-bold mb-2">SATISFIED MEALS</PrimaryText>
            <PrimaryText className="fw-light">
              All our food is freshly prepared on a daily basis to give you only
              the finest cuisine.
            </PrimaryText>
          </div>
          <div className="col-lg-3">
            <GiPartyPopper className="fs-1 mb-3 color-secondary" />
            <PrimaryText className="fw-bold mb-2">PRIVATE PARTY</PrimaryText>
            <PrimaryText className="fw-light">
              We are already ready to serve whether you’re looking to dine with
              three people or 20 people.
            </PrimaryText>
          </div>
        </div>
      </div>
    </InfoWrapper>
  );
};

export default Info;
