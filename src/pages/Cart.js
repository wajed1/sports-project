import React, { useContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";
import { ShopContext } from '../context/shop-context';
import { CartItem } from "./cart-item";
import './Cart.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import NoItemsGif from '../images/empty.gif';
import delivery from '../images/deliveryy.gif'

export const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate()
  const [cart, setCart] = useState([]); // Updated state for the entire cart
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    // Use useEffect to update the cart when the component mounts or when cartItems change
    const updatedCart = PRODUCTS.filter((product) => cartItems[product.id] > 0)
      .map((product) => ({
        id: product.id,
        productName: product.productName,
        price: product.price,
        quantity: cartItems[product.id],
      }));

    setCart(updatedCart);
  }, [cartItems]);

  const handleCheckout = async () => {
    try {
      // Assuming you want to send the entire cart to the server
      await axios.post("http://localhost:8000/product", { cart });

      clearCart();

      setCheckout(true);

    } catch (error) {
      console.error('Error during checkout:', error);
      alert("Something went wrong during checkout");
    }
  }

  return (
    <div className="cart">
      {!checkout ? (
        <>
          <div>
            <h1>Your Cart Items</h1>
          </div>
          <div className="cartItems">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              }
              return null;
            })}
          </div>
          {totalAmount > 0 ? (
            <div className="checkout">
              <p> Subtotal: ${totalAmount}</p>
              <button onClick={() => navigate('/card')}>Continue Shopping</button>
              <button type="button" onClick={handleCheckout}>Checkout</button>
            </div>
          ) : (
            <div className="flex w-full justify-center items-center flex-col">
              <img src={NoItemsGif} className="w-full max-w-sm" />
              <p className="empty">Empty Cart</p>
            </div>
          )}
        </>
      ) : (
        <div className="empty">
          <h1>Thank you for your purchase! Delivery is on the way.</h1>
          <div className="flex w-full justify-center items-center flex-col">
          <img src={delivery} className="w-full max-w-sm" />
        </div>
        </div>
      )}
    </div>
  );
  
};

export default Cart;
