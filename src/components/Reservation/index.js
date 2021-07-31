import React, { useState } from 'react'
import { FaCalendarAlt, FaPhoneAlt, FaStopwatch, FaUserFriends } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { Input, NormalButton, PhoneEmailLabel, PrimaryText, SectionTitle } from '../CommonElements'
import { AvailableTimesWrapper, BookingWrapper, Days, OpeningTimes, ReservationForm, ReservationWrapper, Times } from './Reservation.element'

const Reservation = () => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");

    

      const bookATable = (e) => {
        e.preventDefault();
        setFullName(fullName);
        setPhone(phone);
        setDate(date);
        setTime(time);
        setGuests(guests);
      }

      const clearInputs = () => {
        setFullName("");
        setPhone("");
        setDate("");
        setTime("");
        setGuests("");
      }

    const modal = () => {
        return (
          <div
            className="modal fade"
            id="finishModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="modalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalLabel">
                    Thanks For Your Reservation
                  </h5>
                </div>
                <div className="modal-body">
                    <div className="container text-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <FaUserFriends className="fs-3 mb-1" />
                                <span>Guests: {guests}</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <FaCalendarAlt className="fs-3 mb-1" />
                                <span>Date: {date}</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <FaStopwatch className="fs-3 mb-1" />
                                <span>Time: {time}</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                            <div className="d-flex justify-content-between align-items-center w-100 border-bottom">
                                <PrimaryText className="fw-bold">Full Name: </PrimaryText>
                                <PrimaryText>{fullName}</PrimaryText>
                            </div>
                            <div className="d-flex justify-content-between align-items-center w-100 border-bottom mb-2">
                                <PrimaryText className="fw-bold">Phone: </PrimaryText>
                                <PrimaryText>{phone}</PrimaryText>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <PrimaryText>Your booking request is waiting to be confirmed. Updates will be sent to the phone number you provided.</PrimaryText>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer text-center">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                        onClick={clearInputs}
                    >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      };

    return (
        <ReservationWrapper>
            {modal()}
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
                            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                                <PhoneEmailLabel>
                                    <FaPhoneAlt className="color-danger" /> - 
                                    (546) 937 5480
                                </PhoneEmailLabel>
                                <PhoneEmailLabel>
                                    <GrMail className="color-danger" /> - 
                                    furkan.sunger@outlook.com
                                </PhoneEmailLabel>
                            </div>
                        </AvailableTimesWrapper>
                    </div>
                    <div className="col-lg-6">
                        <BookingWrapper className="color-light">
                            <SectionTitle className="secondary-font color-danger">Reservation</SectionTitle>
                            <SectionTitle>ONLINE BOOKING</SectionTitle>
                            <ReservationForm className="mt-3" onSubmit={bookATable}>
                                <Input value={fullName} onChange={e => setFullName(e.target.value)} type="name" name="fullname" className="mb-2 w-100" autoComplete="off" placeholder="Full Name" required />
                                <Input value={phone} onChange={e => setPhone(e.target.value)} type="tel" name="phone" className="mb-2 w-100" autoComplete="off" placeholder="Phone" required />
                                <Input value={date} onChange={e => setDate(e.target.value)} type="date" name="date" className="mb-2 w-100" min="29-07-2021" required />
                                <Input value={time} onChange={e => setTime(e.target.value)} type="time" name="time" className="mb-2 w-100" required />
                                <Input value={guests} onChange={e => setGuests(e.target.value)} type="number" name="guests" className="mb-3" min="1" placeholder="Party Size" required />
                                <NormalButton data-toggle="modal" data-target={fullName && phone && date && time && guests ? "#finishModal" : ""}>Book a Table</NormalButton>
                            </ReservationForm>
                        </BookingWrapper>
                    </div>
                </div>
            </div>
        </ReservationWrapper>
    )
}

export default Reservation
