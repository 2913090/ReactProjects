import { useState } from 'react'

function ProductForm({onAdd}){
    const [Title, setTitle] = useState("");
    const [Category, setCategory] = useState("Еда");
    const [Important, setImportant] = useState(false);

    const ChangeTitle = (event)=>{
        setTitle(event.target.value)
    }
    const ChangeCategory = (event)=>{
        setCategory(event.target.value)
    }
        const ChangeImportant = (event)=>{
        setImportant(event.target.checked)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        onAdd({title:Title,category:Category,important:Important});
        setTitle("");
        setCategory("Еда");
        setImportant(false);
        
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={ChangeTitle} value={Title} placeholder="Продукт"/>
        <select name="type" onChange={ChangeCategory} value={Category}>
            <option value="еда">Еда</option>
            <option value="напитки">Напитки</option>
            <option value="Десерт">Десерт</option>
        </select>
        <input type="checkbox" onChange={ChangeImportant} checked={Important}/>
        <button type="submit">Добавить</button>
    </form>);
}

export default ProductForm;