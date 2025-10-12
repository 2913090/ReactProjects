import { useParams } from "react-router-dom";
import { recipes } from "../recipes";
function RecipeDetailPage(){
    const params = useParams();
    return (
        <>
            {recipes.find((recipe)=>{
                recipe.id===params.id
            }).map((recipe)=>{
                <>
                <h1>{recipe.name}</h1>
                <ol>
                    {recipe.ingredients.map((ingredient)=>{
                        <li>{ingredient}</li>
                    })}
                </ol>
                <p>{recipe.instructions}</p>
                </>
            })
            }
        </>
    );
}

export default RecipeDetailPage;