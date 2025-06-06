import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/recipes/recipesSlice';
import RecipeCard from '../components/RecipeCard';
import '../styles/Menu.css';
import noResultsImage from '../assets/images/no-results.svg';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.recipes);

  const filteredItems = items.filter((item) => {
    const lowerSearch = searchTerm.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(lowerSearch) ||
      item.cuisine.toLowerCase().includes(lowerSearch) ||
      (item.tags || []).some(tag => tag.toLowerCase().includes(lowerSearch));

    const matchesCuisine = selectedCuisine === 'All' || item.cuisine === selectedCuisine;
    const matchesTag = selectedTag === 'All' || (item.tags || []).includes(selectedTag);

    return matchesSearch && matchesCuisine && matchesTag;
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
        <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
          <option value="All">All Tags</option>
          {[...new Set(items.flatMap((i) => i.tags || []))].map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>

      </div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        filteredItems.length > 0 ? (
          <div className="menu-grid">
            {filteredItems.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <img src={noResultsImage} alt="No results" />
            <p>No matching dishes found. Try adjusting your search or filters!</p>
          </div>
        )
      )}
      {status === 'failed' && <p>Failed to load recipes.</p>}
    </div>
  );
};

export default Menu;
