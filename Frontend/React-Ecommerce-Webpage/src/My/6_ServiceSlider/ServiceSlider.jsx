import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: false,
        centerPadding: '0',
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Slider {...settings} className='text-center'>
                            <div className="pe-3">
                                <div className="border rounded px-3 py-4" style={{ backgroundColor: '#f1f1f1', height: '185px' }}>
                                    <i className="fa-solid fa-dollar-sign text-success border border-3 border-success fs-4 py-1 px-2 mb-3"></i>
                                    <h5>Payment Secure</h5>
                                    <p className='text-secondary m-0'>Our payment system is secure, reliable, efficient, and trusted.</p>
                                </div>
                            </div>
                            <div className="pe-3">
                                <div className="border rounded px-3 py-4" style={{ backgroundColor: '#f1f1f1', height: '185px' }}>
                                    <i className="fa-solid fa-boxes-packing text-success fs-2 mb-3"></i>
                                    <h5>Product Packing</h5>
                                    <p className='text-secondary m-0'>Efficient and professional product packing services tailored for you.</p>
                                </div>
                            </div>
                            <div className="pe-3">
                                <div className="border rounded px-3 py-4" style={{ backgroundColor: '#f1f1f1', height: '185px' }}>
                                    <i className="fa-solid fa-headset text-success fs-2 mb-3"></i>
                                    <h5>24 X 7 Support</h5>
                                    <p className='text-secondary m-0'>Our dedicated team is available 24/7 to assist you with any queries or concerns.</p>
                                </div>
                            </div>
                            <div className="pe-3">
                                <div className="border rounded px-3 py-4" style={{ backgroundColor: '#f1f1f1', height: '185px' }}>
                                    <i className="fa-solid fa-truck-fast text-success fs-2 mb-3"></i>
                                    <h5>Delivery in 5 Days</h5>
                                    <p className='text-secondary m-0'>We deliver your products within 5 working days across the globe.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSlider;
