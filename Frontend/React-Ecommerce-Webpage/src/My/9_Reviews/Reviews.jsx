import React from 'react'

const Reviews = () => {
    return (
        <section style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center" style={{ margin: '0 auto' }}>
                        <h2 className='fw-bolder mb-3'>Great Words From People</h2>
                        <p className='text-secondary mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                    </div>
                    <div className="col-lg-12 mt-5 pt-3 px-0">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="review-card text-center border py-4 px-5 rounded position-relative" style={{ backgroundColor: '#f1f1f1' }}>
                                    <img src="./img/reviewer-1.jpg" alt="reviewer-1.jpg" width={'120'} className="reviewer rounded-circle border border-2 p-2 position-absolute" style={{left:'50%',top:'0',transform:'translate(-50%,-50%)',backgroundColor:'#fff'}} />
                                    <img src="./img/review-quote.png" alt="review-quote.png" width={'10%'} className='position-absolute' style={{ left: '30px', top: '25px' }} />
                                    <img src="./img/review-quote.png" alt="review-quote.png" width={'10%'} className='position-absolute' style={{ right: '30px', bottom: '25px', transform: 'rotate(180deg)' }} />
                                    <p className='pt-5'>Co Founder</p>
                                    <h5 className='fw-bolder mb-3'>Stephen Smith</h5>
                                    <p className='text-secondary m-0 px-5'>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                    <div className="stars text-warning pt-2">
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="review-card text-center border py-4 px-5 rounded position-relative" style={{ backgroundColor: '#f1f1f1' }}>
                                    <img src="./img/reviewer-2.jpg" alt="reviewer-2.jpg" width={'120'} className="reviewer rounded-circle border border-2 p-2 position-absolute" style={{left:'50%',top:'0',transform:'translate(-50%,-50%)',backgroundColor:'#fff'}} />
                                    <img src="./img/review-quote.png" alt="review-quote.png" width={'10%'} className='position-absolute' style={{ left: '30px', top: '25px' }} />
                                    <img src="./img/review-quote.png" alt="review-quote.png" width={'10%'} className='position-absolute' style={{ right: '30px', bottom: '25px', transform: 'rotate(180deg)' }} />
                                    <p className='pt-5'>Manager</p>
                                    <h5 className='fw-bolder mb-3'>Lorem Robinson</h5>
                                    <p className='text-secondary m-0 px-5'>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                    <div className="stars text-warning pt-2">
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-regular fa-star pe-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="review-card text-center border py-4 px-5 rounded position-relative" style={{ backgroundColor: '#f1f1f1' }}>
                                    <img src="./img/reviewer-3.jpg" alt="reviewer-3.jpg" width={'120'} className="reviewer rounded-circle border border-2 p-2 position-absolute" style={{left:'50%',top:'0',transform:'translate(-50%,-50%)',backgroundColor:'#fff'}} />
                                    <img src="./img/review-quote.png" alt="review-quote.png" width={'10%'} className='position-absolute' style={{ left: '30px', top: '25px' }} />
                                    <img src="./img/review-quote.png" alt="review-quote.png" width={'10%'} className='position-absolute' style={{ right: '30px', bottom: '25px', transform: 'rotate(180deg)' }} />
                                    <p className='pt-5'>Team Leader</p>
                                    <h5 className='fw-bolder mb-3'>Saddika Alard</h5>
                                    <p className='text-secondary m-0 px-5'>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                    <div className="stars text-warning pt-2">
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-1" />
                                        <i className="fa-solid fa-star pe-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews