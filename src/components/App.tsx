import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "./Header/Header.tsx";
import Recipe from "./Recipe/Recipe.tsx";
import Page404 from "./Page404/Page404.tsx";

import type { RecipeContainer } from "../types/recipe.ts";

function App() {
    const [recipes, setRecipes] = useState<RecipeContainer | null>(null);
    const URL_PREFIX = import.meta.env.BASE_URL;

    // Fetch recipes data
    useEffect(() => {
        async function fetchRecipes() {
            const response = await fetch(`${URL_PREFIX}data/recipes.json`);
            const data: RecipeContainer = await response.json();
            
            setRecipes(data);
        }

        fetchRecipes();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Header />

                <main>
                    <Routes>
                        <Route path={`${URL_PREFIX}:recipeID`} element={
                            recipes && <Recipe recipeData={recipes} />}
                        />

                        <Route path={URL_PREFIX} element={
                            recipes && <Navigate to={`${URL_PREFIX}brownie`} replace />}
                        />

                        <Route path="*" element={<Page404/>} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;