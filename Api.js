
let apiList = [];

function saveApi() {
    let json = JSON.stringify(apiList);
    localStorage.setItem("api", json);
}

const fetchData = async () => {
    const url = "https://swapi.dev/api/people/";
    const data = await fetch(url);
    const dataJson = await data.json();
    apiList = dataJson.results;
    console.log('fetch apiList', apiList);
    saveApi();
}
fetchData();