import { towns } from "../data";
import { useEffect, useState } from "react";

function SearchFilter(){
    const [search, setSearch] = useState();
    const [filteredItems, setFilteredItems] = useState();

    useEffect(
        ()=>{
            const newFilteredList = towns.filter((towns)=>towns.toLowerCase().includes(search.toLowerCase()));
            setFilteredItems(newFilteredList);
        },
        [search]
    );
    useEffect(
        ()=>{
            document.title="Интерактивный фильтр";
        },
        []
    );

    const changer = (e)=>{
        setSearch(e.target.value)
    }

    return(
        <>
            <input type="text" onChange={(e)=>changer(e)} value={search} />
            <ul>
                {filteredItems.map((town, index) =>(
                    <li key={index}>{town}</li>
                ))}
            </ul>
        </>
    );
}

export default SearchFilter;