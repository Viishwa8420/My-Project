import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Products from "./ProductCardSliderData";

const ProductCardSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: "0",
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="ProductCardSlider" style={{ marginTop: "100px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <Slider {...settings}>
                            {
                                Products.map((product) => {
                                    const { id, category, title, newprice, oldprice } = product;
                                    return (
                                        <div className="px-3" key={id}>
                                            <div className="product-card border rounded position-relative overflow-hidden" style={{ padding: '12px' }}>
                                                <div className="card-img border rounded position-relative">
                                                    <img src={`./img/pro-card-slider-${id}.jpg`} alt={`pro-card-slider-${id}.jpg`} width={'100%'} className='rounded' />
                                                    <a href="#">
                                                        <i className="fa-solid fa-bag-shopping text-success border rounded-circle p-2 position-absolute" style={{ left: '50%', bottom: '0', transform: 'translate(-50%,50%)', backgroundColor: '#f1f1f1' }}></i>
                                                    </a>
                                                </div>
                                                <div className="icons position-absolute" style={{ top: '8%', right: '-15%', opacity: '0', visibility: 'hidden' }}>
                                                    <a href="#"><i className="fa-regular fa-heart text-black bg-white border rounded-circle p-2 mb-2 d-block"></i></a>
                                                    <a href="#"><i className="fa-regular fa-eye text-black bg-white border rounded-circle p-2 mb-2 d-block"></i></a>
                                                </div>
                                                <div className="card-body text-center pt-3">
                                                    <a href="#">
                                                        <span className="text-secondary" style={{ fontSize: '13px', letterSpacing: '1px' }}>{category}</span>
                                                    </a>
                                                    <div className="stars text-warning pt-1 pb-2" style={{ fontSize: '12px' }}>
                                                        <div>
                                                            <i className="fa-solid fa-star pe-1" />
                                                            <i className="fa-solid fa-star pe-1" />
                                                            <i className="fa-solid fa-star pe-1" />
                                                            <i className="fa-solid fa-star pe-1" />
                                                            <i className="fa-regular fa-star pe-2" />
                                                            <span className='text-secondary'>( 4.5 )</span>
                                                        </div>
                                                    </div>
                                                    <a href='#' className='text-black fw-bolder'>{title}</a>
                                                    <p className='m-0 pt-3 text-success fw-bold'>${newprice} <del className='text-secondary fw-medium' style={{ fontSize: '13px' }}>${oldprice}</del></p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </Slider>
                    </div>
                    <div className="col-lg-5 col-md-12 rounded px-4 py-5 mt-4 mt-lg-0" style={{ background: 'url(./img/pro-card-slider-banner.jpg) no-repeat center', backgroundSize: 'cover' }}>
                        <div className="col-md-8 col-10 ms-auto text-end py-5">
                            <h3 className="fw-bold mb-3">Organic & Healthy Vegetables</h3>
                            <p><span className="fs-4 fw-bold">25%</span> OFF</p>
                            <button className="btn btn-success px-4 py-2 fw-bolder mt-3">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCardSlider;
