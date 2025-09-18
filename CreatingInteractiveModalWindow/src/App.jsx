import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)


  const openModal=()=>{
  setIsModalOpen(true);
}
const closeModal=()=>{
  setIsModalOpen(false);
}

  return (
    <>
    <h1>Приложение с модальным окном</h1>
    <button onClick={openModal}>Открыть окно</button>
  {isModalOpen &&<Modal onClose={closeModal} children={"Это содержимое модального окна!"}>
  </Modal>}
    </>
  )
}

export default App
