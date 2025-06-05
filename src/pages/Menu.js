import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/recipes/recipesSlice';
import RecipeCard from '../components/RecipeCard';
import '../styles/Menu.css';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.recipes);
  
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || item.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className='menu-page'>
      <h2>Our Menu</h2>
      <div className="menu-controls">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)}>
          <option value="All">All Cuisines</option>
          {[...new Set(items.map((i) => i.cuisine))].map((cuisine) => (
            <option key={cuisine} value={cuisine}>{cuisine}</option>
          ))}
        </select>
      </div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <div className="menu-grid">
          {filteredItems.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
      {status === 'failed' && <p>Failed to load recipes.</p>}
    </div>
  );
};

export default Menu;
