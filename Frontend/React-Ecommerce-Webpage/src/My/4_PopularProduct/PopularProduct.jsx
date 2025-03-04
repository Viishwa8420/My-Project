import React, { useEffect, useState } from 'react'
import { Category, Products } from './PopularProductData'

const PopularProduct = () => {

    const [record, setRecord] = useState([]);

    useEffect(() => {
        setRecord(Products);
    }, [])

    const category = (name) => {
        if (name === "All") {
            setRecord(Products);
        } else {
            let data = Products.filter((p) => p.category === name);
            setRecord(data);
        }
    }

    return (
        <section className='PopularProduct' style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center" style={{ margin: '0 auto' }}>
                        <h2 className='fw-bolder mb-3'>Popular Products</h2>
                        <p className='text-secondary mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="col-lg-12">
                                    <ul className='ps-0 mb-4'>
                                        {
                                            Category.map((cg) => {
                                                const { id, name } = cg;
                                                return (
                                                    <li onClick={ () => category(name) } key={id} className='d-flex align-items-center justify-content-between fw-bolder border rounded p-3 mb-2 cursor-pointer' style={{ fontSize: '15px', backgroundColor: '#f1f1f1' }}>{name} <i className="fa-solid fa-arrow-right"></i></li>
                                                )
                                            })
                                        }
                                        {/* {
                                            Category.map((cg,i) => {
                                                const { id, name } = cg;
                                                return (
                                                    <li onClick={ () => category(name) } key={id} className='d-flex align-items-center justify-content-between fw-bolder border rounded p-3 mb-2 cursor-pointer' style={{ fontSize: '15px', backgroundColor: '#f1f1f1',color:record.some((r) => r.category === 'All') && i == 0 ? 'green' : record.some((r) => r.category === name) ? 'green' : 'black' }}>{name} <i className="fa-solid fa-arrow-right"></i></li>
                                                )
                                            })
                                        } */}
                                    </ul>
                                </div>
                                <div className="col-lg-12">
                                    <div className="popular-product-banner rounded position-relative overflow-hidden" style={{ maxHeight: '500px' }}>
                                        <img src="./img/popular-product-banner.jpg" alt="popular-product-banner.jpg" width={'100%'} />
                                        <div className="position-absolute" style={{ top: '12%', left: '8%' }}>
                                            <h3 className='fs-2 text-white' style={{ opacity: '0.9' }}>Juicy</h3>
                                            <h2 className='fs-1 fw-bold text-warning' style={{ opacity: '0.7', letterSpacing: '1.5px' }}>Fruits</h2>
                                            <p className='fw-bolder text-white' style={{ opacity: '0.8' }}>100% Natural</p>
                                            <button className='btn btn-success'>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    {
                                        record.map((product) => {
                                            const { id, category, title, newprice, oldprice } = product;
                                            return (
                                                <div className="col-lg-3 mb-4">
                                                    <div className="product-card border rounded position-relative overflow-hidden" style={{ padding: '12px' }}>
                                                        <div className="card-img border rounded position-relative">
                                                            <img src={`./img/pop-pro-${id}.jpg`} alt={`pop-pro-${id}.jpg`} width={'100%'} className='rounded' />
                                                            <a href="#">
                                                                <i className="fa-solid fa-bag-shopping text-success border rounded-circle p-2 position-absolute" style={{ left: '50%', bottom: '0', transform: 'translate(-50%,50%)', backgroundColor: '#f1f1f1' }}></i>
                                                            </a>
                                                        </div>
                                                        <div className="icons position-absolute" style={{ top: '8%', right: '-15%', opacity: '0', visibility: 'hidden' }}>
                                                            <a href="#"><i class="fa-regular fa-heart text-black bg-white border rounded-circle p-2 mb-2 d-block"></i></a>
                                                            <a href="#"><i class="fa-regular fa-eye text-black bg-white border rounded-circle p-2 mb-2 d-block"></i></a>
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
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularProduct