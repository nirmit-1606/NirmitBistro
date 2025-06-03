import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, addToCart, decreaseQuantity } from '../features/cart/cartSlice';
import { Trash2 } from 'lucide-react';
import '../styles/Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p className="unit-price">Unit Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="qty-controls">
                <button onClick={() => dispatch(addToCart(item))}>+</button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  disabled={item.quantity === 1}
                >-</button>
              </div>

              <span className="subtotal">${(item.price * item.quantity).toFixed(2)}</span>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
                title="Remove item"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ${getTotal()}</h3>
            <button className="clear-cart-btn" onClick={() => dispatch(clearCart())} title="Clear Cart">
              <Trash2 size={20} /> Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
