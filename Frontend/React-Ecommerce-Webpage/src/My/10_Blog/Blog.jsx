import React from 'react'

const Blog = () => {
    return (
        <section className='Blog' style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center" style={{ margin: '0 auto' }}>
                        <h2 className='fw-bolder mb-3'>Latest News</h2>
                        <p className='text-secondary mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="blog-card col-lg-3">
                                <div className="blog-content p-4 border border-bottom-0 rounded-top">
                                    <p className='mb-2 text-secondary fw-semibold'>By Admin | <a href="#" className='text-secondary'>Snacks</a></p>
                                    <h5 className='fw-bolder'>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                    <a href="#" className='text-success fw-semibold'>Read More <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                                <div className="blog-img position-relative overflow-hidden">
                                    <img src="./img/blog-img-1.jpg" alt="blog-img-1.jpg" width={'100%'} className='rounded-bottom' />
                                    <span className='position-absolute rounded p-3 text-white fs-3 fw-semibold text-center' style={{backgroundColor:'#000000b3',lineHeight:'1.2',letterSpacing:'1.5px',bottom:'15px',right:'15px'}}>10 <p className='m-0 fs-5 fw-normal'>oct</p></span>
                                </div>
                            </div>
                            <div className="blog-card col-lg-3">
                                <div className="blog-content p-4 border border-bottom-0 rounded-top">
                                    <p className='mb-2 text-secondary fw-semibold'>By Admin | <a href="#" className='text-secondary'>Snacks</a></p>
                                    <h5 className='fw-bolder'>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                    <a href="#" className='text-success fw-semibold'>Read More <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                                <div className="blog-img position-relative overflow-hidden">
                                    <img src="./img/blog-img-2.jpg" alt="blog-img-2.jpg" width={'100%'} className='rounded-bottom' />
                                    <span className='position-absolute rounded p-3 text-white fs-3 fw-semibold text-center' style={{backgroundColor:'#000000b3',lineHeight:'1.2',letterSpacing:'1.5px',bottom:'15px',right:'15px'}}>9 <p className='m-0 fs-5 fw-normal'>sep</p></span>
                                </div>
                            </div>
                            <div className="blog-card col-lg-3">
                                <div className="blog-content p-4 border border-bottom-0 rounded-top">
                                    <p className='mb-2 text-secondary fw-semibold'>By Admin | <a href="#" className='text-secondary'>Snacks</a></p>
                                    <h5 className='fw-bolder'>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                    <a href="#" className='text-success fw-semibold'>Read More <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                                <div className="blog-img position-relative overflow-hidden">
                                    <img src="./img/blog-img-3.jpg" alt="blog-img-3.jpg" width={'100%'} className='rounded-bottom' />
                                    <span className='position-absolute rounded p-3 text-white fs-3 fw-semibold text-center' style={{backgroundColor:'#000000b3',lineHeight:'1.2',letterSpacing:'1.5px',bottom:'15px',right:'15px'}}>12 <p className='m-0 fs-5 fw-normal'>oct</p></span>
                                </div>
                            </div>
                            <div className="blog-card col-lg-3">
                                <div className="blog-content p-4 border border-bottom-0 rounded-top">
                                    <p className='mb-2 text-secondary fw-semibold'>By Admin | <a href="#" className='text-secondary'>Snacks</a></p>
                                    <h5 className='fw-bolder'>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                    <a href="#" className='text-success fw-semibold'>Read More <i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                                <div className="blog-img position-relative overflow-hidden">
                                    <img src="./img/blog-img-4.jpg" alt="blog-img-4.jpg" width={'100%'} className='rounded-bottom' />
                                    <span className='position-absolute rounded p-3 text-white fs-3 fw-semibold text-center' style={{backgroundColor:'#000000b3',lineHeight:'1.2',letterSpacing:'1.5px',bottom:'15px',right:'15px'}}>22 <p className='m-0 fs-5 fw-normal'>jan</p></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog