const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', ()=>{
    const mealName = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    // .then(res => res.json())
    // .then(data => displayMeals(data.meals))
})

const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
          <div  onClick="showMeal(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,500)}</p>
            </div>
          </div>
        `
        mealsContainer.appendChild(div)
    })
}

const showMeal = (id) =>{
    const singleMeal = document.getElementById('show-meal');
    singleMeal.innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data.meals[0]);
        const div = document.createElement('div');
    div.innerHTML = `
    <img src="${strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.meals[0].strMeal}</h5>
      <p class="card-text">${data.meals[0].strInstructions.slice(0,500)}</p>
    </div>
    `
    singleMeal.appendChild(div)
    })
    
}