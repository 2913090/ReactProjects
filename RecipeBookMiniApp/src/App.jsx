import { Route, Routes } from 'react-router-dom';
import './App.css'
import NotFoundPage from './pages/NotFoundPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import RecipeListPage from './pages/RecipeListPage';
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <>
      <header>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/recipes">Рецепты</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<RecipeListPage />}/>
        <Route path="/recipes" element={<RecipeListPage />}/>
        <Route path="/recipes/:recipeId" element={<RecipeDetailPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App
