import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import Header from "./Header/Header";
import Recipe from "./Recipe/Recipe";

function App() {
    const [recipes, setRecipes] = useState(null);
    const URL_PREFIX = import.meta.env.BASE_URL;

    // Fetch recipes data
    useEffect(() => {
        async function fetchRecipes() {
            const response = await fetch(`${URL_PREFIX}data/recipes.json`);
            const data = await response.json();
            
            setRecipes(data);
        }

        fetchRecipes();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={`${URL_PREFIX}:recipeID`} element={
                        recipes && <Recipe recipeData={recipes} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;