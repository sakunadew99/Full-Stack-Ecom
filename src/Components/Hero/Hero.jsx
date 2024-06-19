import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'
import '../../App.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h1>Shop With Us</h1>
                <div className='hero-subtitle'>
                    <p>New collections for everyone</p>
                </div>
                <p className='hero-description'>
                    Discover the latest trends in fashion and enjoy an unparalleled shopping experience. Find your style and express yourself with our new collection.
                </p>
                <div className='hero-buttons'>
                    <div className='hero-latest-btn'>
                        <div>Latest Collection</div>
                        <img src={arrow_icon} alt="Arrow Icon" />
                    </div>
                    <Link to='/shop' className='hero-shop-btn'>
                        Start Shopping
                    </Link>
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_image} alt="Hero" />
            </div>
        </div>
    )
}

export default Hero
