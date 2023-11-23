import React from 'react';
import{PRODUCTS} from '../products';
import {Product} from './Product';
import'./Card.css';

function Card() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Vshop</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product)=>(
          <Product data={product}/>
        ))}
      </div>
    </div>
  );
}

export default Card;
