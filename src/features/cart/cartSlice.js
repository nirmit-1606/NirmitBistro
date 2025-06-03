import { createSlice } from '@reduxjs/toolkit';

const getInitialCart = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getInitialCart(),
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    decreaseQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    },
    clearCart: () => {
      localStorage.removeItem('cart');
      return [];
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
