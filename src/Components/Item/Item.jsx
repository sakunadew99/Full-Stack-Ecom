import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Load();
  }, []);

  async function Load() {
    try {
      const result = await axios.get("http://localhost:8084/api/v1/item/getall");
      setItems(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item._id} className='item'>
          <Link to={`/product/${item._id}`}>
            <img src={item.image} alt="" />
          </Link>
          <p>{item.name}</p>
          <div className='item-prices'>
            <div className='item-price-new'>
              {item.new_price}
            </div>
            <div className='item-price-old'>
              {item.old_price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Item;
