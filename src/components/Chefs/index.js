import React from 'react'
import { PrimaryText, SectionTitle, SocialMedia, SocialMediaItem, SocialMediaLink } from '../CommonElements'
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { ChefSliderItem, ChefSocialMediaWrapper, ChefsWrapper } from './Chefs.element';
import Slider from "react-slick";

const Chefs = () => {
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
      
    return (
        <ChefsWrapper>
            <div className="container">
                <SectionTitle className="secondary-font color-danger text-center">Go to Kitchen</SectionTitle>
                <SectionTitle className="text-center">MEET OUR CHEFS</SectionTitle>
                <Slider {...settings}>
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
                            <PrimaryText className="fw-bold">Gordon Ramsey</PrimaryText>
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
                            <PrimaryText className="fw-bold">Gordon Ramsey</PrimaryText>
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
                            <PrimaryText className="fw-bold">Gordon Ramsey</PrimaryText>
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
                            <PrimaryText className="fw-bold">Gordon Ramsey</PrimaryText>
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
                            <PrimaryText className="fw-bold">Gordon Ramsey</PrimaryText>
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
                            <PrimaryText className="fw-bold">Gordon Ramsey</PrimaryText>
                            <PrimaryText>Major Chef</PrimaryText>
                        </span>
                    </ChefSliderItem>
                </Slider>
            </div>
        </ChefsWrapper>
    )
}

export default Chefs
