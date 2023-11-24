import React, { useState } from 'react';
import { PRODUCTS } from '../products';
import { Product } from './Product';
import './Card.css';

function Card() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Vshop</h1>
      </div>Y
      <div className='searchBarContainer'>
        <input
          type='text'
          placeholder='Search products...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='searchBarInput'
        />
      </div>
      <div className='products'>
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Card;
