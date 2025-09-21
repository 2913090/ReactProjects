import AccordionItem from './components/AccordionItem'
import { faqData } from './faqData'
import './App.css'
import { useState } from 'react';
function App() {
  const [openItemId, setOpenItemId] = useState(null);
  const handleToggleItem = (itemId)=>{
    setOpenItemId(itemId);
  }
  return (
    <>
    <h1>Часто задаваемые вопросы</h1>
    {faqData.map((data)=>
      <AccordionItem key={data.id} openItemId question={data.question} answer={data.answer} isOpen={openItemId===data.id} onToggle={()=>handleToggleItem(data.id)}></AccordionItem>
    )}
    </>
  );
}

export default App