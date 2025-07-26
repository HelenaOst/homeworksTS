//#whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.


type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string [];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}
type RecipesResponse = {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
}


fetch('https://dummyjson.com/recipes')
    .then((res: Response): Promise<RecipesResponse> => res.json())
    .then((recipesObject: RecipesResponse): void => {
        const {recipes} = recipesObject;

        for (let recipe of recipes) {
            const wrapper: HTMLDivElement | null = document.querySelector('#wrapper');
            if (wrapper) {
            const recipeDiv: HTMLDivElement = document.createElement('div');
            recipeDiv.classList.add('recipe-div');

            const lineTitle: HTMLHeadingElement = document.createElement("h3");
            lineTitle.innerHTML = `Recipe №${recipe.id} - ${recipe.name}`;

            const recipeImg: HTMLImageElement = document.createElement("img");
            recipeImg.src = `${recipe.image}`;

            const ingredientsUl: HTMLUListElement = document.createElement('ul');

            const ingredTitle: HTMLHeadingElement = document.createElement("h4");
            ingredTitle.innerHTML = `Ingredints:`;
            ingredientsUl.appendChild(ingredTitle);

            for (const ingredient of recipe.ingredients) {
                const ingredientLi: HTMLLIElement = document.createElement('li');
                ingredientLi.innerHTML = `${ingredient}`;
                ingredientsUl.appendChild(ingredientLi);
            }

            const instructionsOl: HTMLOListElement = document.createElement('ol');
            const instructTitle:HTMLHeadingElement = document.createElement("h4");
            instructTitle.innerHTML = `Instructions:`;
            instructionsOl.appendChild(instructTitle);

            for (const instruction of recipe.instructions) {
                const instructionLi: HTMLLIElement = document.createElement('li');
                instructionLi.innerHTML = `${instruction}`;
                instructionsOl.appendChild(instructionLi);
            }

            const timeP:HTMLParagraphElement = document.createElement("p");
            timeP.innerHTML = `Preparing: ${recipe.prepTimeMinutes} min. Cooking: ${recipe.cookTimeMinutes} min.`;

            const servingsP:HTMLParagraphElement = document.createElement("p");
            servingsP.innerHTML = `Servings: ${recipe.servings}`;

            const difficultyP:HTMLParagraphElement = document.createElement("p");
            difficultyP.innerHTML = `Difficulty: ${recipe.difficulty}`;

            const cuisineP:HTMLParagraphElement = document.createElement("p");
            cuisineP.innerHTML = `Cuisine: ${recipe.cuisine}`;

            const caloriesPerServingP:HTMLParagraphElement = document.createElement("p");
            caloriesPerServingP.innerHTML = `Calories: ${recipe.caloriesPerServing}`;

           const tagsUl: HTMLUListElement = document.createElement('ul');
           const tagsTitle: HTMLHeadingElement = document.createElement("h5");
           tagsTitle.innerHTML = `Tags:`;
           tagsUl.appendChild(tagsTitle);

            for(const tag of recipe.tags){
                const tagsLi: HTMLLIElement = document.createElement("li");
                tagsLi.innerHTML = `${tag} `;
                tagsUl.appendChild(tagsLi);
            }

            const ratingP:HTMLParagraphElement = document.createElement("p");
            ratingP.innerHTML = `Rating: ${recipe.rating}`;

            const userIdP:HTMLParagraphElement = document.createElement("p");
            userIdP.innerHTML = `User ID: ${recipe.userId}`;

            const reviewCountP:HTMLParagraphElement = document.createElement("p");
            reviewCountP.innerHTML = `Review Count: ${recipe.reviewCount}`;

            const mealTypeUl: HTMLUListElement = document.createElement('ul');
            const mealTypeTitle:HTMLHeadingElement = document.createElement("h5");
            mealTypeTitle.innerHTML = `Meal type:`;
            mealTypeUl.appendChild(mealTypeTitle);

            for(const type of recipe.mealType){
                const mealTypeLi:HTMLLIElement = document.createElement("li");
                mealTypeLi.innerHTML = `${type} `;
                mealTypeUl.appendChild(mealTypeLi);
            }

            recipeDiv.append(lineTitle, recipeImg, ingredientsUl, instructionsOl, timeP, servingsP, difficultyP, cuisineP, caloriesPerServingP, tagsUl, ratingP, userIdP, reviewCountP, mealTypeUl);
            wrapper.appendChild(recipeDiv);
            }}
    });
