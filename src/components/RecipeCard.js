import React from 'react';
import './RecipeCard.css';
import { addToCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
    const dispatch = useDispatch();
    const {
        id,
        image,
        name,
        cuisine,
        caloriesPerServing,
        rating,
        price = Number((caloriesPerServing / 20).toFixed(2)) // Sample logic to assign price
    } = recipe;

    const handleAddToCart = () => {
        dispatch(addToCart({ id, name, price, image }));
        toast.success(`${name} added to cart!`);
    };

    return (
        <div className="recipe-card">
            <img src={image} alt={name} className="recipe-image" />
            <div className="recipe-details">
                <h3 title={name}>{name}</h3>
                <p>{cuisine} | ⭐ {rating}</p>
                <p className="price">${price.toFixed(2)}</p>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default RecipeCard;
