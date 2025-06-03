import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/recipes/recipesSlice';
import RecipeCard from '../components/RecipeCard';
import '../styles/Menu.css';

const Menu = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className='menu-page'>
      <h2>Our Menu</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div className="menu-grid">
          {items.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
      {status === 'failed' && <p>Failed to load recipes.</p>}
    </div>
  );
};

export default Menu;
