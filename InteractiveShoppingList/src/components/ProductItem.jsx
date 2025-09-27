function ProductItem({good, removeFunc}){

    return <li>
        {(good.important)?"*":""}{good.title} {good.category}
        <button onClick={() => removeFunc(good.id)}>Удалить</button>
        </li>
}

export default ProductItem;