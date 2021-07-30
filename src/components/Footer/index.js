import React from 'react'
import { FaFacebookF, FaHome, FaInstagram, FaPhoneAlt, FaPinterestP, FaYoutube } from 'react-icons/fa'
import { HiMail } from "react-icons/hi";
import { IoMdRestaurant } from "react-icons/io";
import { Link } from 'react-router-dom'
import { SocialMedia, SocialMediaItem, SocialMediaLink } from '../CommonElements'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start primary-bg color-white">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
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
            </section>
            <section className=" border-bottom">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 fs-1 text-center">
                                <IoMdRestaurant />
                            </h6>
                            <p className="secondary-font fs-3 text-center">
                                YUMMY FOODS
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <Link className="nav-link text-white" to="/">Menu</Link>
                            </p>
                            <p>
                                <Link className="nav-link text-white" to="/">About</Link>
                            </p>
                            <p>
                                <Link className="nav-link text-white" to="/">Contact</Link>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <FaHome /> - 
                                Mersin/TURKEY
                            </p>
                            <p>
                                <HiMail /> - 
                                furkan.sunger@outlook.com
                            </p>
                            <p>
                                <FaPhoneAlt /> - 
                                + 01 234 567 88
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4">
                © 2021 Copyright <span className="fw-bold">Vibe Software</span>
            </div>
        </footer>
    )
}

export default Footer
