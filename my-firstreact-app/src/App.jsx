import { useState } from 'react'
import BusinessCard from './BusinessCard.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Мое первое React-приложение</h1>
      <BusinessCard></BusinessCard>
    </>
  )
}

export default App
