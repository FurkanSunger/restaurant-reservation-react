import React from 'react'
import { Input, NormalButton, PhoneEmailLabel, SectionTitle } from '../CommonElements'
import { AvailableTimesWrapper, BookingWrapper, Days, OpeningTimes, ReservationForm, ReservationWrapper, Times } from './Reservation.element'

const Reservation = () => {
    return (
        <ReservationWrapper>
            <div className="container primary-bg">
                <div className="row p-4">
                    <div className="col-lg-6">
                        <AvailableTimesWrapper className="color-light">
                            <SectionTitle className="secondary-font color-danger">When We're Available</SectionTitle>
                            <SectionTitle className="mb-3">OPENING TIME</SectionTitle>
                            <OpeningTimes>
                                <Times>
                                    <span>07.00 - 11.00 (Breakfast)</span>
                                    <span>11.00 - 22.00 (Lunch/Dinner)</span>
                                </Times>
                                <Days className="secondary-bg">Monday - Friday</Days>
                            </OpeningTimes>
                            <OpeningTimes>
                                <Times>
                                    <span>09.00 - 11.00 (Breakfast)</span>
                                    <span>11.00 - 22.00 (Lunch/Dinner)</span>
                                </Times>
                                <Days className="secondary-bg">The Weekend</Days>
                            </OpeningTimes>
                            <hr className="color-white" />
                            <PhoneEmailLabel>(546) 937 5480</PhoneEmailLabel>
                            <PhoneEmailLabel>furkan.sunger@outlook.com</PhoneEmailLabel>
                        </AvailableTimesWrapper>
                    </div>
                    <div className="col-lg-6">
                        <BookingWrapper className="color-light">
                            <SectionTitle className="secondary-font color-danger">Reservation</SectionTitle>
                            <SectionTitle>ONLINE BOOKING</SectionTitle>
                            <ReservationForm className="mt-3">
                                <Input type="name" name="name" className="mb-2 w-100" autoComplete="off" placeholder="Full Name" />
                                <Input type="tel" name="phone" className="mb-2 w-100" autoComplete="off" placeholder="Phone" />
                                <Input type="date" name="date" className="mb-2 w-100" min="29-07-2021" />
                                <Input type="time" name="time" className="mb-2 w-100" />
                                <Input type="number" name="party" className="mb-3" min="1" placeholder="1" />
                                <NormalButton>Book a Table</NormalButton>
                            </ReservationForm>
                        </BookingWrapper>
                    </div>
                </div>
            </div>
        </ReservationWrapper>
    )
}

export default Reservation
