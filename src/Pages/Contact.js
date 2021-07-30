import React from 'react'
import { Input, SectionTitle, TextArea } from '../components/CommonElements'
import Navbar from '../components/Navbar'
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt, FaMapMarker } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className="primary-bg color-light pt-5 border-top">
                <div className="container">
                    <Navbar background="primary" />
                </div>
            </div>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle className="fw-bold danger-color">Contact Us</SectionTitle>
                        <hr />
                        <form>
                            <Input type="name" name="name" className="mb-3" placeholder="Full Name" autoComplete="off" />
                            <Input type="email" name="email" className="mb-3" placeholder="Email" autoComplete="off" />
                            <Input type="text" name="text" className="mb-3" placeholder="Subject" autoComplete="off" />
                            <TextArea name="message" className="mb-3" placeholder="Message" />
                            <button type="button" className="btn btn-outline-warning">Send</button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <SectionTitle className="fw-bold danger-color">Location</SectionTitle>
                        <hr />
                        <div className="d-flex flex-column justify-content-center align-items-start">
                            <div className="d-flex align-items-center justify-content-start mb-4 fs-3">
                                <FaPhoneAlt className="color-danger" />
                                <span className="fs-6 fw-light mx-3">(546) 937 5480</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-start mb-4 fs-3">
                                <FaMapMarker className="color-danger" />
                                <span className="fs-6 fw-light mx-3">Mersin/Turkey</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-start mb-4 fs-3">
                                <GrMail className="color-danger" />
                                <span className="fs-6 fw-light mx-3">furkan.sunger@outlook.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <img className="img-fluid" src="https://www.zyrgon.com/wp-content/uploads/2019/06/googlemaps-Zyrgon.jpg" alt="map" />
                </div>
            </div>
        </>
    )
}

export default Contact
