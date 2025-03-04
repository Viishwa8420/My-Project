import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

const OfferSlider = () => {
    useEffect(() => {
        const splide = new Splide('.splide', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            focus: 'center',
            autoplay: true,
            interval: 3000,
            speed: 1000,
            pauseOnHover: false,
            pauseOnFocus: false,
            arrows: false,
            pagination: false,
            gap: '1rem',
            breakpoints: {
                1200: { perPage: 2 },
                768: { perPage: 1 },
            },
        });
        splide.mount();
        return () => {
            splide.destroy();
        };
    }, []);

    return (
        <section className='OfferSlider' style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="splide">
                            <div className="splide__track">
                                <ul className="splide__list">
                                    <li className="splide__slide py-5 px-4 rounded" style={{ background: 'url(./img/offer-slider-1.jpg) no-repeat center', backgroundSize: 'cover' }}>
                                        <h4><p className='m-0'>Fresh</p>Snacks & Sweets</h4>
                                        <p className='text-secondary'><span className='text-success fw-bold fs-5'>20% </span> off on first order</p>
                                        <button className='btn btn-success'>Shop Now</button>
                                    </li>
                                    <li className="splide__slide py-5 px-4 rounded" style={{ background: 'url(./img/offer-slider-2.jpg) no-repeat center', backgroundSize: 'cover' }}>
                                        <h4><p className='m-0'>Healthy</p>Bakery Products</h4>
                                        <p className='text-secondary'><span className='text-success fw-bold fs-5'>30% </span> off on first order</p>
                                        <button className='btn btn-success'>Shop Now</button>
                                    </li>
                                    <li className="splide__slide py-5 px-4 rounded" style={{ background: 'url(./img/offer-slider-3.jpg) no-repeat center', backgroundSize: 'cover' }}>
                                        <h4><p className='m-0'>Fresh & Healthy</p>Organic Fruits</h4>
                                        <p className='text-secondary'><span className='text-success fw-bold fs-5'>35% </span> off on first order</p>
                                        <button className='btn btn-success'>Shop Now</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSlider;