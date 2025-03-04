import React from 'react'

const Offer = () => {

    return (
        <section className='Offer' style={{ marginTop: '100px' }}>
            <div className="container" style={{ height: '545px' }}>
                <div className="row">
                    <ul className="col-lg-4 m-0 text-center">
                        <li className='border rounded p-4 mb-1 cursor-pointer' style={{ lineHeight: '8px', backgroundColor: '#f1f1f1' }}>
                            <h5 className='text-success' style={{ fontSize: '17px', letterSpacing: '1px' }}>Cake & Milk</h5>
                            <span className='text-secondary' style={{ fontSize: '13px' }}>( 65 items )</span>
                        </li>
                        <li className='border rounded p-4 mb-1 cursor-pointer' style={{ lineHeight: '8px', backgroundColor: '#f1f1f1' }}>
                            <h5 style={{ fontSize: '17px', letterSpacing: '1px' }}>Fresh Meat</h5>
                            <span className='text-secondary' style={{ fontSize: '13px' }}>( 30 items )</span>
                        </li>
                        <li className='border rounded p-4 mb-1 cursor-pointer' style={{ lineHeight: '8px', backgroundColor: '#f1f1f1' }}>
                            <h5 style={{ fontSize: '17px', letterSpacing: '1px' }}>Vegetables</h5>
                            <span className='text-secondary' style={{ fontSize: '13px' }}>( 25 items )</span>
                        </li>
                        <li className='border rounded p-4 mb-1 cursor-pointer' style={{ lineHeight: '8px', backgroundColor: '#f1f1f1' }}>
                            <h5 style={{ fontSize: '17px', letterSpacing: '1px' }}>Apple & Mango</h5>
                            <span className='text-secondary' style={{ fontSize: '13px' }}>( 45 items )</span>
                        </li>
                        <li className='border rounded p-4 mb-1 cursor-pointer' style={{ lineHeight: '8px', backgroundColor: '#f1f1f1' }}>
                            <h5 style={{ fontSize: '17px', letterSpacing: '1px' }}>Strawberry</h5>
                            <span className='text-secondary' style={{ fontSize: '13px' }}>( 68 items )</span>
                        </li>
                        <li className='border rounded p-4 mb-1 cursor-pointer' style={{ backgroundColor: '#f1f1f1' }}>
                            <h5 className='text-success' style={{ fontSize: '17px', letterSpacing: '1px' }}>View More</h5>
                        </li>
                    </ul>
                    <div className="col-lg-4">
                        <div className='OfferBanner rounded text-white position-relative position-relative overflow-hidden' style={{ background: 'url(./img/offer-1.jpg) no-repeat center', backgroundSize: 'cover', height: '100%' }}>
                            <h3 className='d-flex align-items-center fw-bold position-absolute' style={{ fontSize: '55px', left: '5%', top: '2%',zIndex:'2' }}>50
                                <p className='fs-5 m-0 ps-1 pt-2 fw-normal'><span className='d-block'>%</span><span className='d-block'>OFF</span></p>
                            </h3>
                            <div className="position-absolute text-center p-4" style={{ width: '100%', left: '0', bottom: '0',zIndex:'2' }}>
                                <h4>Cake</h4>
                                <button className='btn btn-success'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='OfferBanner rounded text-white position-relative position-relative overflow-hidden' style={{ background: 'url(./img/offer-2.jpg) no-repeat center', backgroundSize: 'cover', height: '100%' }}>
                            <h3 className='d-flex align-items-center fw-bold position-absolute' style={{ fontSize: '55px', left: '5%', top: '2%',zIndex:'2' }}>40
                                <p className='fs-5 m-0 ps-1 pt-2 fw-normal'><span className='d-block'>%</span><span className='d-block'>OFF</span></p>
                            </h3>
                            <div className="position-absolute text-center p-4" style={{ width: '100%', left: '0', bottom: '0',zIndex:'2' }}>
                                <h4>Milk</h4>
                                <button className='btn btn-success'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer