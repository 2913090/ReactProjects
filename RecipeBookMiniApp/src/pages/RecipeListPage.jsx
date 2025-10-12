import { recipes } from "../recipes";
import { useParams } from "react-router-dom";
function RecipeListPage(){
    const params = useParams();
    return (
        <>
        <ul>
            {recipes.map((recipe)=>{
                <Link to="recipes/:params.id">{recipe.name}</Link>
            })}
        </ul>
        </>
    )
}

export default RecipeListPage;