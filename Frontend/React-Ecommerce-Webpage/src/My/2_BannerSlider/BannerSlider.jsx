import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: "0",
        arrows: false,
      };

    return (
        <section className='BannerSlider'>
            <Slider {...settings}>
                <div className="col-lg-3">
                    <div style={{background:'url(./img/banner1.jpg) no-repeat center',backgroundSize:'cover'}}>
                        <div className="container py-5">
                            <div className="row py-5">
                                <div className="sliderContent col-lg-5 pe-5 py-5">
                                    <h5 className='fw-bold'><span className='text-success text-decoration-underline'>100%</span> Organic Fruits</h5>
                                    <h1 className='fw-bold pt-3 pb-4' style={{ fontSize: '55px', letterSpacing: '1.5px',lineHeight:'75px' }}>Explore fresh & juicy fruits.</h1>
                                    <p className='text-secondary pt-2 pe-5'>Our fruits are grown in the best conditions to ensure the highest quality and taste.</p>
                                    <button className='btn btn-success px-4 py-2 fw-bold mt-4'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div style={{background:'url(./img/banner2.jpg) no-repeat center',backgroundSize:'cover'}}>
                        <div className="container py-5">
                            <div className="row py-5">
                                <div className="sliderContent col-lg-5 pe-5 py-5">
                                    <h5 className='fw-bold'><span className='text-success text-decoration-underline'>100%</span> Organic Vegetables</h5>
                                    <h1 className='fw-bold pt-3 pb-4' style={{ fontSize: '55px', letterSpacing: '1.5px',lineHeight:'75px' }}>The best way to stuff your wallet.</h1>
                                    <p className='text-secondary pt-2 pe-5'>Our fruits are grown in the best conditions to ensure the highest quality and taste.</p>
                                    <button className='btn btn-success px-4 py-2 fw-bold mt-4'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default BannerSlider