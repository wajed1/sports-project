import React, { useState } from 'react';
import { PRODUCTS } from '../products';
import { Product } from './Product';
import { FaSearch } from 'react-icons/fa';
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
    <section>
      <div className='shop'>
        <div className='shopTitle'>
          <h1>Vshop</h1>
        </div>
        <div className='searchBarContainer'>
          <input
            type='text'
            placeholder='Search products...'
            value={searchTerm}
            onChange={handleSearchChange}
            className='searchBarInput'
          />
          <button className="btn" type="submit">
            <FaSearch />
          </button>
        </div>
        <div className='products'>
          {filteredProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
