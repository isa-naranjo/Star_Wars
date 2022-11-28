
async function getCategories(){
    let url = "https://swapi.dev"
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)



    let dessetCat = data.categories[2];
    console.log(dessetCat);
    let listPeopleURL = "https://swapi.dev/api/people/?page=2" + dessetCat.strCategory
    console.log(listPeopleURL)

    let mealResponse = await fetch(listPeopleURL);
    let mealList = await mealResponse.json();
    console.log(mealList);

    for(let i=0 ; i<mealList.meals.length ; i++){
        let id = mealList.meals[i].idMeal
        let detailURL = "https://swapi.dev/api/planets/?page=2"+
        console.log(detailURL);
    }
}
async function getMealDetails(url){
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
}


getCategories();