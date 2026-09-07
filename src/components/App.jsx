import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import Header from "./Header/Header";
import Recipe from "./Recipe/Recipe";

function App() {
    const [recipes, setRecipes] = useState(null);

    // Fetch recipes data
    useEffect(() => {
        async function fetchRecipes() {
            const response = await fetch("../data/recipes.json");
            const data = await response.json();
            
            setRecipes(data);
        }

        fetchRecipes();
    }, []);

    return (
        <>
            <Header />
            {
                recipes &&
                <main>
                    <Recipe recipeData={recipes.brownie} />
                    <Recipe recipeData={recipes.pessic} />
                    <Recipe recipeData={recipes.cookies} />
                    <Recipe recipeData={recipes.santiago} />
                    <Recipe recipeData={recipes.cheescake} />
                </main>
            }
        </>
    );
}

export default App;