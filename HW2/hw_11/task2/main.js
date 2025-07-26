"use strict";
//#whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
fetch('https://dummyjson.com/recipes')
    .then((res) => res.json())
    .then((recipesObject) => {
    const { recipes } = recipesObject;
    for (let recipe of recipes) {
        const wrapper = document.querySelector('#wrapper');
        if (wrapper) {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe-div');
            const lineTitle = document.createElement("h3");
            lineTitle.innerHTML = `Recipe №${recipe.id} - ${recipe.name}`;
            const recipeImg = document.createElement("img");
            recipeImg.src = `${recipe.image}`;
            const ingredientsUl = document.createElement('ul');
            const ingredTitle = document.createElement("h4");
            ingredTitle.innerHTML = `Ingredints:`;
            ingredientsUl.appendChild(ingredTitle);
            for (const ingredient of recipe.ingredients) {
                const ingredientLi = document.createElement('li');
                ingredientLi.innerHTML = `${ingredient}`;
                ingredientsUl.appendChild(ingredientLi);
            }
            const instructionsOl = document.createElement('ol');
            const instructTitle = document.createElement("h4");
            instructTitle.innerHTML = `Instructions:`;
            instructionsOl.appendChild(instructTitle);
            for (const instruction of recipe.instructions) {
                const instructionLi = document.createElement('li');
                instructionLi.innerHTML = `${instruction}`;
                instructionsOl.appendChild(instructionLi);
            }
            const timeP = document.createElement("p");
            timeP.innerHTML = `Preparing: ${recipe.prepTimeMinutes} min. Cooking: ${recipe.cookTimeMinutes} min.`;
            const servingsP = document.createElement("p");
            servingsP.innerHTML = `Servings: ${recipe.servings}`;
            const difficultyP = document.createElement("p");
            difficultyP.innerHTML = `Difficulty: ${recipe.difficulty}`;
            const cuisineP = document.createElement("p");
            cuisineP.innerHTML = `Cuisine: ${recipe.cuisine}`;
            const caloriesPerServingP = document.createElement("p");
            caloriesPerServingP.innerHTML = `Calories: ${recipe.caloriesPerServing}`;
            const tagsUl = document.createElement('ul');
            const tagsTitle = document.createElement("h5");
            tagsTitle.innerHTML = `Tags:`;
            tagsUl.appendChild(tagsTitle);
            for (const tag of recipe.tags) {
                const tagsLi = document.createElement("li");
                tagsLi.innerHTML = `${tag} `;
                tagsUl.appendChild(tagsLi);
            }
            const ratingP = document.createElement("p");
            ratingP.innerHTML = `Rating: ${recipe.rating}`;
            const userIdP = document.createElement("p");
            userIdP.innerHTML = `User ID: ${recipe.userId}`;
            const reviewCountP = document.createElement("p");
            reviewCountP.innerHTML = `Review Count: ${recipe.reviewCount}`;
            const mealTypeUl = document.createElement('ul');
            const mealTypeTitle = document.createElement("h5");
            mealTypeTitle.innerHTML = `Meal type:`;
            mealTypeUl.appendChild(mealTypeTitle);
            for (const type of recipe.mealType) {
                const mealTypeLi = document.createElement("li");
                mealTypeLi.innerHTML = `${type} `;
                mealTypeUl.appendChild(mealTypeLi);
            }
            recipeDiv.append(lineTitle, recipeImg, ingredientsUl, instructionsOl, timeP, servingsP, difficultyP, cuisineP, caloriesPerServingP, tagsUl, ratingP, userIdP, reviewCountP, mealTypeUl);
            wrapper.appendChild(recipeDiv);
        }
    }
});
