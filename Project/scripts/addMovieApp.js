let recipes = [];

function Recipe(name, type, descirption, imageUrl) {
    this.name = name;
    this.type = type;
    this.descirption = descirption;
    this.imageUrl = imageUrl;
}

function toggleFormContainer() {
    let formContainer = document.getElementById("form-container");
    if (formContainer.style.display == "block") {
        formContainer.style.display = "none";
    }
    else {
        formContainer.style.display = "block";
    }
}

function createRecipe() {
    debugger;
    let recipeName = document.getElementById("recipeNameInput").value;
    let recipeType = document.getElementById("recipeTypeInput").value;
    let recipeDescription = document.getElementById("recipeDescriptionInput").value;
    let recipeImage = document.getElementById("recipeImageInput").value;

    let recipe = new Recipe(recipeName, recipeType, recipeDescription, recipeImage);
    recipes.push(recipe);

    renderRecipeToScreen(recipeImage, recipeName, recipeDescription);
    toggleFormContainer();
    clearCreateRecipeInputs();
}

function renderRecipeToScreen(recipeImage, recipeName, recipeDescription) {
    let column = createRecipeCard(recipeImage, recipeName, recipeDescription);

    let row = document.querySelector(".recipes-container > .row");
    row.appendChild(column);
}

function createRecipeCard(recipeImage, recipeName, recipeDescription) {
    let column = document.createElement("div");
    column.className = "col-12 col-md-6 col-lg-3";

    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.className = "card-img-top";
    image.src = recipeImage;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = recipeName;

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = recipeDescription;

    let cardButton = document.createElement("button");
    cardButton.className = "rvw";
    cardButton.innerText = "Review";
    cardButton.onclick = function () { openRecipeOverview(recipeName) };

    column.appendChild(card);
    card.appendChild(image);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    return column;
}

function clearCreateRecipeInputs() {
    let requiredFiels = document.querySelectorAll('#form-container [clear="true"]');
    for (let i = 0; i < requiredFiels.length; i++) {
        requiredFiels[i].value = "";
    }
}

function validateCreateRecipeInputs() {
    let isValid = true;
    let requiredFiels = document.querySelectorAll('#form-container [validate="true"]');
    for (let i = 0; i < requiredFiels.length; i++) {
        if (requiredFiels[i].value == null || requiredFiels[i].value == "") {
            showCreateErrorMessage();
            isValid = false;
            break;
        }
    }

    if (isValid) {
        hideCreateErrorMessage();
    }

    return isValid;
}

function showCreateErrorMessage() {
    document.getElementById("createRecipeAlert").style.display = "block";
}

function hideCreateErrorMessage() {
    document.getElementById("createRecipeAlert").style.display = "none";
}

function closeRecipeOverview() {
    let recipeOverview = document.getElementById("recipe-overview");
    
    let recipeName = document.getElementById("recipeName");
    recipeName.innerText = "";

    let recipeImage = document.getElementById("recipeImageContainer");
    recipeImage.style.backgroundImage = '';

    let recipeDescription = document.getElementById("recipeDescription");
    recipeDescription.innerText = "";

    let recipeType = document.getElementById("recipeType");
    recipeType.innerText = "";

    recipeOverview.style.display = "none";
}

function openRecipeOverview(recipeNameParameter) {
    let recipe;
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].name == recipeNameParameter) {
            recipe = recipes[i];
        }
    }

    let recipeName = document.getElementById("recipeName");
    recipeName.innerText = recipe.name;

    let recipeImage = document.getElementById("recipeImageContainer");
    console.log(recipe.imageUrl);
    recipeImage.style.backgroundImage = `url('${recipe.imageUrl}')`;

    let recipeDescription = document.getElementById("recipeDescription");
    recipeDescription.innerText = recipe.descirption;

    let recipeType = document.getElementById("recipeType");
    recipeType.innerText = recipe.type;

    let recipeOverview = document.getElementById("recipe-overview");
    recipeOverview.style.display = "flex";
}

function getRecipeByName(recipeName) {
    let recipe;
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].name == recipeName) {
            recipe = recipes[i];
        }
    }
    return recipe;
}

function initEventListeners() {
    let addRecipeBtn = document.getElementById("addRecipe");
    addRecipeBtn.onclick = toggleFormContainer;

    let cancelCreateBtn = document.getElementById("cancelCreateBtn");
    cancelCreateBtn.onclick = toggleFormContainer;

    let createRecipeBtn = document.getElementById("createRecipeBtn");
    createRecipeBtn.onclick = createRecipe;

    let closeRecipeOverviewBtn = document.getElementById("closeRecipeOverviewBtn");
    closeRecipeOverviewBtn.onclick = closeRecipeOverview;
}


initEventListeners();

