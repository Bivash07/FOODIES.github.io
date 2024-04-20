const SPOONACULAR_API_KEY = Your_Key;

function getIndianRecipes() {
    const inputElement = document.getElementById('vegetableInput');
    const inputValue = inputElement.value;

    if (inputValue.trim() !== '') {
        fetch(`https://api.spoonacular.com/recipes/search?query=${inputValue}&cuisine=indian&apiKey=${SPOONACULAR_API_KEY}`)
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => displayRecipes(data.results))
            .catch(error => console.error('Error fetching recipes:', error));
    } else {
        console.error('Please enter a valid ingredient or dish name');
    }
}

function displayRecipes(recipes) {
    const recipeResultsElement = document.getElementById('recipeResults');
    recipeResultsElement.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.title;

        const recipeImage = document.createElement('img');

        if (recipe.image) {
            recipeImage.src = `https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`;
            recipeImage.alt = recipe.title;
    
        } else {
            // Provide a placeholder image or handle missing images as needed
            recipeImage.src = 'placeholder-image-url'; // Replace with a placeholder image URL
        }

        recipeImage.alt = recipe.title;

        const recipeIngredients = document.createElement('p');

        if (recipe.missedIngredients && recipe.missedIngredients.length > 0) {
            recipeIngredients.textContent = `Ingredients: ${recipe.missedIngredients.map(ingredient => ingredient.original).join(', ')}`;
        } 
        // else {
        //     recipeIngredients.textContent = 'Ingredients not available';
        // }

        const recipeLink = document.createElement('a');

        if (recipe.sourceUrl) {
            recipeLink.href = recipe.sourceUrl;
            recipeLink.textContent = 'View Recipe';
        } else {
            // Handle case where sourceUrl is not available
            recipeLink.textContent = 'Recipe Details Not Available';
            recipeLink.style.pointerEvents = 'none';  // Disable the link if the URL is not available
        }

        recipeDiv.appendChild(recipeTitle);
        recipeDiv.appendChild(recipeImage);
        recipeDiv.appendChild(recipeIngredients);
        recipeDiv.appendChild(recipeLink);

        recipeResultsElement.appendChild(recipeDiv);
    });
}

