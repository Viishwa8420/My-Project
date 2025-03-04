import React from 'react'
import './Style.css'
import { NavBar, SearchBar } from './1_Header/Header'
import BannerSlider from './2_BannerSlider/BannerSlider'
import Offer from './3_Offer/Offer'
import PopularProduct from './4_PopularProduct/PopularProduct'
import OfferSlider from './5_OfferSlider/OfferSlider'
import ServiceSlider from './6_ServiceSlider/ServiceSlider'
import Deal from './7_Deal/Deal'
import ProductCardSlider from './8_ProductCardSlider/ProductCardSlider'
import Reviews from './9_Reviews/Reviews'
import Blog from './10_Blog/Blog'
import Footer from './11_Footer/Footer'



const Home_1 = () => {
  return (
    <div>
        <SearchBar/>
        <NavBar/>
        <BannerSlider/>
        <Offer/>
        <PopularProduct/>
        <OfferSlider/>
        <ServiceSlider/>
        <Deal/>
        <ProductCardSlider/>
        <Reviews/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Home_1