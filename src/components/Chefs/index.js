import React from 'react'
import { PrimaryText, SectionTitle, SocialMedia, SocialMediaItem, SocialMediaLink } from '../CommonElements'
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { ChefSliderItem, ChefSocialMediaWrapper, ChefsSliderWrapper, ChefsWrapper } from './Chefs.element';

const Chefs = () => {
    return (
        <ChefsWrapper>
            <div className="container">
                <SectionTitle className="secondary-font color-danger text-center">Go to Kitchen</SectionTitle>
                <SectionTitle className="text-center">MEET OUR CHEFS</SectionTitle>
                <ChefsSliderWrapper>
                    <ChefSliderItem>
                        <img src="https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_960_720.jpg" alt="chef-img" className="img-fluid rounded" />
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
                            <PrimaryText>Gordon Ramsey</PrimaryText>
                            <PrimaryText>Major Chef</PrimaryText>
                        </span>
                    </ChefSliderItem>
                    <ChefSliderItem>
                        <img src="https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_960_720.jpg" alt="chef-img" className="img-fluid rounded" />
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
                            <PrimaryText>Gordon Ramsey</PrimaryText>
                            <PrimaryText>Major Chef</PrimaryText>
                        </span>
                    </ChefSliderItem>
                    <ChefSliderItem>
                        <img src="https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_960_720.jpg" alt="chef-img" className="img-fluid rounded" />
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
                            <PrimaryText>Gordon Ramsey</PrimaryText>
                            <PrimaryText>Major Chef</PrimaryText>
                        </span>
                    </ChefSliderItem>
                    <ChefSliderItem>
                        <img src="https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_960_720.jpg" alt="chef-img" className="img-fluid rounded" />
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
                            <PrimaryText>Gordon Ramsey</PrimaryText>
                            <PrimaryText>Major Chef</PrimaryText>
                        </span>
                    </ChefSliderItem>
                </ChefsSliderWrapper>
            </div>
        </ChefsWrapper>
    )
}

export default Chefs
