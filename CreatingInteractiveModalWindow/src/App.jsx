import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'


function openModal(){
  setIsModalOpen(isModalOpen=true);
}
function closeModal(){
  setIsModalOpen(isModalOpen=false);
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    <h1>Приложение с модальным окном</h1>
    <button onClick={openModal}>Открыть окно</button>
  <Modal props={closeModal}>
    <p>Это содержимое модального окна!</p>
  </Modal>
    </>
  )
}

export default App
