import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './features/recipes/recipesSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    cart: cartReducer,
  },
});
