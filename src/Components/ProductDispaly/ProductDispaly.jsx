import React, { useContext } from 'react'
import './ProductDispaly.css'
//import '../../App.css'
//import {useParams} from 'react-router-dom'
//import {ShopContext} from '../../Context/ShopContext'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDispaly = (props) => {
    const { product } = props;
    const {addztoCart} = useContext(ShopContext);
    return (
        <div className='productdispaly'>
            <div className='productdispaly-left'>
                <div className='productdispaly-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className='productdispaly-right'>
                <h1>{product.namae}</h1>
                <div className='productDispaly-right-star'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />

                    <p>(122)</p>
                </div>
                <div className='productdispaly-right-prices'>
                    <div className='productdispaly-right-price-old'>${product.old_price}</div>
                    <div className='productdispaly-right-price-new'>${product.new_price}</div>
                </div>
                <div className='productdispaly-right-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatum officia voluptatem assumenda sed voluptas repellat ipsam sunt dolores dolorem illum, hic reprehenderit, dolorum voluptates nulla unde sequi aspernatur. Illo.
                </div>
                <div className='productdispaly-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdispaly-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addztoCart(product.id)}}>ADD TO CART</button>
                <p className='productdispaly-right-category'><span>Category :</span>Women, T-shirt,Crop Top</p>
                <p className='productdispaly-right-category'><span>Tags :</span>Modern, Latest</p>
            </div>

        </div>
    )
}

export default ProductDispaly
