/// <reference types="vite/client" />

export type Oven = {
    time: number,
    temperature: number
};

export type Recipe = {
    id: string,
    recipeName: string,
    ingredients: string[],
    preparation: string[],
    oven: Oven;
};

export type RecipeContainer = {
    [key: string]: Recipe
};