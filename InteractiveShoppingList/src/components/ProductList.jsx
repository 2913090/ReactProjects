import ProductItem from "./ProductItem";
function ProductList({goods, onRemove}){

    return (<div>
        <ul>
            {(goods.length !==0)? (goods.map((product) => <ProductItem key={product.id} good={product} removeFunc={onRemove}></ProductItem>)):<p>Список пока пуст</p>}
        </ul>
    </div>);
}

export default ProductList;