import "./Recipe.css";
import Page404 from "../Page404/Page404.tsx";
import { useParams } from "react-router-dom";
import type { Recipe, RecipeContainer } from "../../types/recipe.ts";

function Recipe({recipeData}: {recipeData: RecipeContainer}) {
    // Send 404 if no ID is found
    const { recipeID } = useParams<{recipeID: string}>();
    if (!recipeID) return <Page404/>;

    // Send 404 if ID matches no recipe in JSON data
    const recipe: Recipe = recipeData[recipeID];
    if (!recipe) return <Page404/>;

    // If found, retrieve data
    const {id, recipeName, ingredients, preparation, oven} = recipe;

    return (
        <div id={id} className="wrapper">
            <h1>{recipeName}</h1>

            <div className="recipe-grid">
                <aside>
                    <h2>INGREDIENTS</h2>
                    {
                        ingredients.map((ingredient) => {
                            return <p key={ingredient}>{ingredient}</p>;
                        })
                    }
                </aside>
                <aside>
                    <h2>PREPARACIÓ</h2>
                    {
                        preparation.map((instruction) => {
                            return <p key={instruction}>{instruction}</p>;
                        })
                    }
                </aside>
                <aside>
                    <img src={`img/${id}-header.jpg`} alt={`${id}-header`} />
                </aside>
                <aside className="secondary-box">
                    <div>
                        <i className="fa-solid fa-clock"></i>
                        <br />
                        <strong>{oven.time}&nbsp;min</strong>
                    </div>
                </aside>
                <aside className="secondary-box">
                    <div>
                        <i className="fa-solid fa-fire-burner"></i>
                        <br />
                        <strong>{oven.temperature}&nbsp;°C</strong>
                    </div>
                </aside>
            </div>

            <div className="img-container">
                <img src={`img/${id}1.jpg`} alt={id} className="food-img" />
                <img src={`img/${id}2.jpg`} alt={id} className="food-img" />
                <img src={`img/${id}3.jpg`} alt={id} className="food-img" />
            </div>
        </div>
    )
}

export default Recipe;