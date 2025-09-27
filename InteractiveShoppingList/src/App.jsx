import { useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
function App() {
  const [products, setProducts] = useState([]);

  const importantCount = products.filter((product)=>product.important).length;
  const total = products.length;

  const addProduct = ({title, category, important})=>{
    if(title.trim() === "") return;
    const newProduct={id:Date.now(), title:title, category:category, important:important}
    setProducts((products) => [...products, newProduct]);
  }

  const removeProduct=(id)=>{
    setProducts((products) => products.filter((p) => p.id !== id));
  }

  const clearList=()=>{
    setProducts([]);
  }
  return (
    <>
      <h1>Список покупок</h1>
      <ProductForm onAdd={addProduct}></ProductForm>
      <ProductList goods={products} onRemove={removeProduct}></ProductList>
      <p>Всего продуктов: {total}</p>
      <p>Важных продуктов: {importantCount}</p>
      {products.length > 0 && <button onClick={clearList}>Очистить список</button>}
    </>
  )
}

export default App
