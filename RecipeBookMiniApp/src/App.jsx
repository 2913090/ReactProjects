import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import NotFoundPage from './pages/NotFoundPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import RecipeListPage from './pages/RecipeListPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/recipes" element={<RecipeListPage />}/>
        <Route path="/recipes/:recipeId" element={<RecipeDetailPage />}/>
        <Route path="/*" element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App
