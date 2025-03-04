import React from 'react'
import logo from './img/logo.png'

const SearchBar = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="searchBar row-cols-3 col-lg-12 px-0 d-flex align-items-center py-4 border-bottom">
                        <a href="#" className="logo">
                            <img src={logo} alt="logo.png" />
                        </a>
                        <div className="searchBox d-flex position-relative">
                            <input type="text" className=" form-control border-success" placeholder="Search For items..." style={{ borderRadius: '6px 0 0 6px' }} />
                            <select name="Categories" className='px-2 border-success'>
                                <option value="All" selected>All Categories</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Electronics">Electronics</option>
                            </select>
                            <button type="submit" className="btn btn-success" style={{ borderRadius: '0 6px 6px 0' }}>
                                <i className="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                        <ul className="searchBarMenu d-flex justify-content-end column-gap-4 fw-bolder m-0">
                            <li className='py-2'>
                                <a href="#" className='account text-black position-relative'>
                                    <i className="fa-regular fa-user pe-2" />
                                    <span>Account</span>
                                    <ul className='position-absolute fw-normal py-2 p-0 rounded bg-white' style={{ boxShadow: '0px 4px 17.64px 0.36px rgba(0, 0, 0, 0.2)', width: '150px', zIndex: '1', left: '-15px', top: '70px', opacity: '0', visibility: 'hidden' }}>
                                        <li className='px-3 py-2'>
                                            <a href="#" className='text-secondary'>Register</a>
                                        </li>
                                        <li className='px-3 py-2'>
                                            <a href="#" className='text-secondary'>CheckOut</a>
                                        </li>
                                        <li className='px-3 py-2'>
                                            <a href="#" className='text-secondary'>LogIn</a>
                                        </li>
                                    </ul>
                                </a>
                            </li>
                            <li className='py-2'>
                                <a href="#" className='text-black'>
                                    <i className="fa-regular fa-heart pe-2"></i>
                                    <span>Wishlist</span>
                                </a>
                            </li>
                            <li className='py-2'>
                                <a href="#" className='text-black'>
                                    <i className="fa-brands fa-opencart pe-2"></i>
                                    <span>Cart</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

const NavBar = () => {

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="navbar col-lg-12 d-flex align-items-center">
                        <div className="categoriesToggle cursor-pointer position-relative">
                            <i className="fa-solid fa-bars-staggered border rounded p-2" />
                            <ul className='NavBar-Category position-absolute d-flex p-2 mb-0 rounded bg-white' style={{ boxShadow: '0px 4px 17.64px 0.36px rgba(0, 0, 0, 0.2)', width: '650px', zIndex: '1', left: '0', top: '60px',opacity:'0',visibility:'hidden' }}>
                                <li className='col-4 px-2'>
                                    <div className="category-btn">
                                        <button className='btn border text-start py-2 my-1 border-success text-success' style={{width:'100%'}}>Dairy & Bakery</button>
                                        <button className='btn border text-start py-2 my-1' style={{width:'100%'}}>Fruits & Vegetable</button>
                                        <button className='btn border text-start py-2 my-1' style={{width:'100%'}}>Snack & Spice</button>
                                        <button className='btn border text-start py-2 my-1' style={{width:'100%'}}>Juice & Drinks</button>
                                        <button className='btn border text-start py-2 my-1' style={{width:'100%'}}>View All</button>
                                    </div>
                                </li>
                                <li className='col-4 px-2' style={{fontSize:'15px'}}>
                                    <h5 className='text-success border-bottom pb-2 mt-2 mb-3'>Dairy</h5>
                                    <p><a href="#" className='text-secondary'>Milk</a></p>
                                    <p><a href="#" className='text-secondary'>Ice Cream</a></p>
                                    <p><a href="#" className='text-secondary'>Cheese</a></p>
                                    <p><a href="#" className='text-secondary'>Frozen Custard</a></p>
                                    <p><a href="#" className='text-secondary'>Frozen Yogurt</a></p>
                                </li>
                                <li className='col-4 px-2' style={{fontSize:'15px'}}>
                                    <h5 className='text-success border-bottom pb-2 mt-2 mb-3'>Bakery</h5>
                                    <p><a href="#" className='text-secondary'>Cake & Pastry</a></p>
                                    <p><a href="#" className='text-secondary'>Rusk Toast</a></p>
                                    <p><a href="#" className='text-secondary'>Bread & Buns</a></p>
                                    <p><a href="#" className='text-secondary'>Chocolate Brownie</a></p>
                                    <p><a href="#" className='text-secondary'>Cream Roll</a></p>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbarMenu d-flex m-0 column-gap-5">
                            <li>
                                <a href='#' className='text-black fw-semibold'>Home</a>
                            </li>
                            <li className='position-relative'>
                                <a href='#' className='text-black fw-semibold'>Category <i className="fa-solid fa-angle-down" style={{ fontSize: '10px' }} /></a>
                                <ul className='dropdown position-absolute fw-normal py-2 p-0 rounded bg-white border-top border-2 border-success' style={{ boxShadow: '0px 4px 17.64px 0.36px rgba(0, 0, 0, 0.2)', width: '200px', zIndex: '1', left: '-15px', top: '60px', opacity: '0', visibility: 'hidden' }}>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Shop Left Sliderbar</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Shop Right Sliderbar</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Full Width</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='position-relative'>
                                <a href='#' className='text-black fw-semibold'>Products <i className="fa-solid fa-angle-down" style={{ fontSize: '10px' }} /></a>
                                <ul className='dropdown position-absolute fw-normal py-2 p-0 rounded bg-white border-top border-2 border-success' style={{ boxShadow: '0px 4px 17.64px 0.36px rgba(0, 0, 0, 0.2)', width: '220px', zIndex: '1', left: '-15px', top: '60px', opacity: '0', visibility: 'hidden' }}>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Product Left Sliderbar</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Product Right Sliderbar</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Product Full Width</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='position-relative'>
                                <a href='#' className='text-black fw-semibold'>Pages <i className="fa-solid fa-angle-down" style={{ fontSize: '10px' }} /></a>
                                <ul className='dropdown position-absolute fw-normal py-2 p-0 rounded bg-white border-top border-2 border-success' style={{ boxShadow: '0px 4px 17.64px 0.36px rgba(0, 0, 0, 0.2)', width: '150px', zIndex: '1', left: '-15px', top: '60px', opacity: '0', visibility: 'hidden' }}>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>About Us</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Contact Us</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Cart</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Chechout</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Track Order</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Wishlist</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Faq</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Login</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Resister</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Policy</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='position-relative'>
                                <a href='#' className='text-black fw-semibold'>Blog <i className="fa-solid fa-angle-down" style={{ fontSize: '10px' }} /></a>
                                <ul className='dropdown position-absolute fw-normal py-2 p-0 rounded bg-white border-top border-2 border-success' style={{ boxShadow: '0px 4px 17.64px 0.36px rgba(0, 0, 0, 0.2)', width: '220px', zIndex: '1', left: '-15px', top: '60px', opacity: '0', visibility: 'hidden' }}>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Left Sliderbar</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Right Sliderbar</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Full Width</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Detail Left Sliderbar</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Detail Right Sliderbar</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Detail Full Width</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='position-relative'>
                                <a href='#' className='text-black fw-semibold'>Elements <i className="fa-solid fa-angle-down" style={{ fontSize: '10px' }} /></a>
                                <ul className='dropdown position-absolute fw-normal py-2 p-0 rounded bg-white border-top border-2 border-success' style={{ boxShadow: '0px 4px 17.64px 0.36px rgba(0, 0, 0, 0.2)', width: '170px', zIndex: '1', left: '-15px', top: '60px', opacity: '0', visibility: 'hidden' }}>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Products</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Typography</a>
                                    </li>
                                    <li className='px-3 py-2'>
                                        <a href="#" className='text-secondary'>Buttons</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <span>
                            <i className="fa-solid fa-phone"></i>
                            <a href="#" className='text-black ps-1'>+123 ( 456 ) ( 7890 )</a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export { SearchBar, NavBar }