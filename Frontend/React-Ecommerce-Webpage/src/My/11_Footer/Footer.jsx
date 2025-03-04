import React from 'react'

const Footer = () => {
    return (
        <footer className='border-top' style={{ marginTop: '100px', backgroundColor: '#f1f1f1' }}>
            <div className="container">
                <div className="row border-bottom" style={{ padding: '100px 0' }}>
                    <div className="col-md-4">
                        <ul className='ps-0 pe-3 text-secondary d-flex flex-column row-gap-3'>
                            <li><img src="./img/logo.png" alt="" /></li>
                            <li>Carrot is the biggest market of grocery products. Get your daily needs from our store.</li>
                            <li><i className="fa-solid fa-location-dot text-success pe-2"></i>51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</li>
                            <li><i className="fa-solid fa-envelope text-success pe-2"></i><a href="#" className='text-secondary'>example@email.com</a></li>
                            <li><i className="fa-solid fa-phone text-success pe-2"></i><a href="#" className='text-secondary'>+91 123 4567890</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <ul className='col-6 ps-0 d-flex flex-column row-gap-3'>
                                <li><h5>Company</h5></li>
                                <li><a href="#" className='text-secondary'>About Us</a></li>
                                <li><a href="#" className='text-secondary'>Delivery Information</a></li>
                                <li><a href="#" className='text-secondary'>Privacy Policy</a></li>
                                <li><a href="#" className='text-secondary'>Terms & Conditions</a></li>
                                <li><a href="#" className='text-secondary'>contact Us</a></li>
                                <li><a href="#" className='text-secondary'>Support Center</a></li>
                            </ul>
                            <ul className='col-6 ps-0 d-flex flex-column row-gap-3'>
                                <li><h5>Category</h5></li>
                                <li><a href="#" className='text-secondary'>Dairy & Bakery</a></li>
                                <li><a href="#" className='text-secondary'>Fruits & Vegetable</a></li>
                                <li><a href="#" className='text-secondary'>Snack & Spice</a></li>
                                <li><a href="#" className='text-secondary'>Juice & Drinks</a></li>
                                <li><a href="#" className='text-secondary'>Chicken & Meat</a></li>
                                <li><a href="#" className='text-secondary'>Fast Food</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <ul className='ps-0 d-flex flex-column row-gap-3'>
                            <li><h5>Subscribe Our Newsletter</h5></li>
                            <li><input type="text" placeholder='Search here...' className='border rounded px-3 py-2' style={{width:'100%'}} /></li>
                            <li>
                                <a href="#"><i className="fa-brands fa-facebook-f text-black bg-white border fs-5 text-center rounded me-2" style={{width:'35px',height:'35px',lineHeight:'35px'}}></i></a>
                                <a href="#"><i className="fa-brands fa-x-twitter text-black bg-white border fs-5 text-center rounded me-2" style={{width:'35px',height:'35px',lineHeight:'35px'}}></i></a>
                                <a href="#"><i className="fa-brands fa-dribbble text-black bg-white border fs-5 text-center rounded me-2" style={{width:'35px',height:'35px',lineHeight:'35px'}}></i></a>
                                <a href="#"><i className="fa-brands fa-instagram text-black bg-white border fs-5 text-center rounded me-2" style={{width:'35px',height:'35px',lineHeight:'35px'}}></i></a>
                            </li>
                            <li className='footer-img d-flex justify-content-between'>
                                <a href="#" className='position-relative' style={{width:'18%'}}>
                                    <img src="./img/footer-1.jpg" alt="footer-1.jpg" className='rounded' />
                                    <i className="fa-brands fa-instagram position-absolute fs-2 text-white" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)',opacity:'0',visibility:'hidden'}}></i>
                                </a>
                                <a href="#" className='position-relative' style={{width:'18%'}}>
                                    <img src="./img/footer-2.jpg" alt="footer-2.jpg" className='rounded' />
                                    <i className="fa-brands fa-instagram position-absolute fs-2 text-white" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)',opacity:'0',visibility:'hidden'}}></i>
                                </a>
                                <a href="#" className='position-relative' style={{width:'18%'}}>
                                    <img src="./img/footer-3.jpg" alt="footer-3.jpg" className='rounded' />
                                    <i className="fa-brands fa-instagram position-absolute fs-2 text-white" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)',opacity:'0',visibility:'hidden'}}></i>
                                </a>
                                <a href="#" className='position-relative' style={{width:'18%'}}>
                                    <img src="./img/footer-4.jpg" alt="footer-4.jpg" className='rounded' />
                                    <i className="fa-brands fa-instagram position-absolute fs-2 text-white" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)',opacity:'0',visibility:'hidden'}}></i>
                                </a>
                                <a href="#" className='position-relative' style={{width:'18%'}}>
                                    <img src="./img/footer-5.jpg" alt="footer-5.jpg" className='rounded' />
                                    <i className="fa-brands fa-instagram position-absolute fs-2 text-white" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)',opacity:'0',visibility:'hidden'}}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row py-3 text-center">
                    <span className='fw-semibold'>© 2024 <a href="#" className='text-success'>Carrot</a>, All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer